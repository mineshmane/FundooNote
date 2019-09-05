
/******************************************************************************
 *  Execution       :cmd> node register.ts                      
 *  @description    :it used for registraion writing logic code and method of taht component
 *  @file           :registerCompnents.ts
 *  @author         :Minesh Mane <mineshmane94@gmail.com>
 *  @version        :1.0
 
 ******************************************************************************/



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/register';
import { UserService } from '../../services/userService/user.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { addToCart } from '../../model/cartModel'

import { CartServiceService } from '../../services/cartService/cart-service.service';
/********************************************************
      * @description this class is used for myerror state matchcher
      * @returns true or false 
      */

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

/********************************************************
      * @description it classs of componenet registration component 
      * @returns true or false 
      */
export class RegistrationComponent implements OnInit {
  public registerForm: FormGroup;
  productId;
  hide = true;
  matcher = new MyErrorStateMatcher();
  service: any;
  cartModel: addToCart;
  cartid: string;
  productName: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router,
    private snackBar: MatSnackBar, private cartService: CartServiceService) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      cpassword: ['', [Validators.minLength(6)]]

    }, { validator: this.checkPasswords });

  }

  /********************************************************
      * @description this method is for cheak password and cinfim password are matched or not 
      * @returns true or false 
      */
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.cpassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  /********************************************************
      * @description this tsetcase is for String should not be empty
      * @returns true or false 
      */
  ngOnInit() {
    this.getServices();

    this.productId = localStorage.getItem('serviceId')
    this.cartid = localStorage.getItem('cartId')
    console.log(" product id ", this.productId);
    this.getcartDetails()
    // this.registerForm = new FormGroup({
    //   firstName: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]),
    //   lastName: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
      // password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    //   // cpassword: ['', [Validators.minLength(6)]]
    // });
  }
  getcartDetails() {
    let data = {
      cartId: this.cartid
    }
    this.cartService.getCartDetails(this.cartid).subscribe(data => {
      console.log(" data ", data);
      this.productName = data['data'].product
      console.log(" product name", this.productName.name);

    })
  }
  // public hasError = (controlName: string, errorName: string) => {
  //   return this.registerForm.controls[controlName].hasError(errorName);
  // }
  services: any;

  getServices() {
    try {
      this.userService.getService().subscribe(data => {
        console.log('data after get all user service', data);
        this.services = data['data']['data'];

      }, err => {
        console.log('err after get user services ', err);

      })
    } catch (error) {
      console.log('error after get user services ', error);

    }

  }




  /********************************************************
      * @description this method is called for when user press button register in in html 
      * @returns  res[onse gfrom server 
      */
  registerUser = (registerFormValue) => {
    try {
      console.log(registerFormValue);
      if (registerFormValue.password !== registerFormValue.cpassword) {
        this.snackBar.open('password didnot macth', '', { duration: 2000 });

      } else {
        if (this.registerForm.invalid) {
          return
        } else {
          this.createUser(registerFormValue)
        }
      }
    } catch (error) {
      console.log(error);

    }


  }
  /********************************************************
      * @description this method is for creating new user from user model 
      * @returns new user object
      */

  private createUser = (registerFormValue) => {
    try {
      let newUser: User = {
        firstName: registerFormValue.firstName,
        lastName: registerFormValue.lastName,
        email: registerFormValue.email,
        password: registerFormValue.password,
        // service: 'advance',
        service: this.productName.name,
        imageurl: '',
        phoneNumber: "",
        cartId: this.cartid
      }
      console.log("new user created ", newUser);


      this.userService.register(newUser).subscribe(response => {
        console.log('response ', response);
        this.snackBar.open('register succesfully', '', { duration: 2000 });
        this.router.navigate(['/login']);

      }, error => {
        console.log('error ', error);

      })
    } catch (error) {
      console.log(error);

    }
  }

  /********************************************************
         * @description user service called here wiht  argument new user data for registration
         * @returns response/error
         */
  select(item) {
    // this.getErrorMessageserver='';
    console.log(item);
    this.productId = item.id;
    for (let i = 0; i < this.services.length; i++) {
      if (this.services[i].id == this.productId) {
        this.service = this.services[i].name
      }

    }
    this.addToCart(item.id);

  }

  /********************************************************
         * @description user service called here wiht  argument new user data for registration
         * @returns response/error
         */
  addToCart(id: string) {
    this.cartModel = new addToCart();
    this.cartModel.productId = id;
    this.cartService.addToCartService(this.cartModel).subscribe(data => {
      console.log('data after add to cart', data);
      localStorage.setItem('cartId', data['data']['details'].id)
    }, err => {
      console.log('error after add to cart ', err);

    })
  }

  login() {
    // localStorage.removeItem('cartId')
    // localStorage.removeItem('serviceId')
    this.router.navigate(['login']);
  }

}