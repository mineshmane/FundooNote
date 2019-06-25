
/******************************************************************************
 *  Execution       :cmd> node server.js                      
 *  @description    :it used for registraion writing logic code and method of taht component
 *  @file           :userRouter.js
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
  hide = true;
  matcher = new MyErrorStateMatcher();
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
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
    //  this.registerForm = new FormGroup({
    //    firstName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    //    lastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    //    email:new FormControl('',[Validators.required,Validators.email])
    // password: ['', [Validators.required, Validators.minLength(6),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    //cpassword: ['', [Validators.minLength(6)]]
    //     });
  }
  // public hasError = (controlName: string, errorName: string) => {
  //   return this.registerForm.controls[controlName].hasError(errorName);
  // }


  /********************************************************
      * @description this method is called for when user press button register in in html 
      * @returns  res[onse gfrom server 
      */
  registerUser = (registerFormValue) => {
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

  }
  /********************************************************
      * @description this method is for creating new user from user model 
      * @returns new user object
      */

  private createUser = (registerFormValue) => {
    let newUser: User = {
      firstName: registerFormValue.firstName,
      lastName: registerFormValue.lastName,
      email: registerFormValue.email,
      password: registerFormValue.password,
      service: 'advance'
    }
    console.log("new user created ", newUser);
     /********************************************************
      * @description user service called here wiht  argument new user data for registration
      * @returns response/error
      */

    this.userService.register(newUser).subscribe(response => {
      console.log('response ', response);
      this.snackBar.open('register succesfully', '', { duration: 2000 });
      this.router.navigate(['/login']);

    }, error => {
      console.log('error ', error);

    })

  }




}