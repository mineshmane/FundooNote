
/******************************************************************************
 *  Execution       :cmd> node ng s for compiling                     
 *  @description    :for validation and service calling is done in ts file methods logic code in ts file 
 *  @file           :forget.component.ts
 *  @author         :Minesh Mane <mineshmane94@gmail.com>
 *  @version        :1.0
 
 ******************************************************************************/


import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})

   /********************************************************
      * @description componenet class 
      * @returns  for generate and deastroy 
      */
export class ForgetComponent implements OnInit {
  public forgetForm: FormGroup;


  constructor(private userService: UserService, private router: Router,
    private snackBar: MatSnackBar) { }

     /********************************************************
      * @description ngOninit method is user for initialization
      * @returns  true false
      */
  ngOnInit() {
    this.forgetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

 /********************************************************
      * @description this method is used for validation in html userinputs 
      * @returns  true false
      */
  public hasError = (controlName: string, errorName: string) => {
    return this.forgetForm.controls[controlName].hasError(errorName);
  }

 /********************************************************
      * @description this method is called for when user submit the form  in in html 
      * @returns  response from server 
      */

  forgetPassword(forgetFormvalue) {
    console.log(" login event called ", forgetFormvalue);
    this.userService.forgetPassword(forgetFormvalue).subscribe(response => {
      console.log('response ', response);
      this.snackBar.open('please cheack your mail for reset password ', '', { duration: 4000 });
     // this.router.navigate(['/login']);


    });
  }

}

