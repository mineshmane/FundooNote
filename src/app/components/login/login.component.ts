
/******************************************************************************
 *  Execution       :cmd> node server.js                      
 *  @description    :it is for the login function which is used for 
 *  @file           :login.ts
 *  @author         :Minesh Mane <mineshmane94@gmail.com>
 *  @version        :1.0
 
 ******************************************************************************/


import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { addToCart } from 'src/app/model/cartModel';
import { CartServiceService } from '../../services/cartService/cart-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  cardID;
  hide = true;
  productId: any;
  // cartid: string;
  service: any;
  cartModel: addToCart;
  cartid: any;
  productName: any;
  constructor(private userService: UserService, private router: Router, private cartService: CartServiceService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.productId = localStorage.getItem('serviceId')
    this.cartid = localStorage.getItem('cartId')

    this.getServices()
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }



  services: any;
  /**
     * @description: this method is for getting service details 
     *                component
     * @param      : note object
     */
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

 /**
* @description: this method is for it show selected service as selected 
*                component
* @param      : note object
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
      * @description this mehod is for login pupose  
      * @returns token
      */

  loginUser(loginFormvalue) {
    try {
      console.log(" login event called ", loginFormvalue);
      this.userService.login(loginFormvalue).subscribe(response => {
        // console.log('response ', response);
        localStorage.setItem('token', response['id']);
        localStorage.setItem('userId', response['userId'])
        localStorage.setItem('firstName', response['firstName'])
        localStorage.setItem('lastName', response['lastName'])
        localStorage.setItem('imageUrl', response['imageUrl'])
        //localStorage.setItem('image', response['status']['imageUrl']);
        localStorage.setItem('email', response['email'])
        this.snackBar.open('login succesfully', '', { duration: 2000 });
        this.router.navigate(['/dashboard']);


      }, error => {
        console.log('error ', error);
        this.snackBar.open("login failed  wrong password or username")
      });
    } catch (error) {
      console.log(error);

    }

  }
}
