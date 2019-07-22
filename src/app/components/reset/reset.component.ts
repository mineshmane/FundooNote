
/******************************************************************************
 *  Execution       :cmd> node server.js                      
 *  @description    :ts file used for reset the code 
 *  @file           :reset.compoenet.ts
 *  @author         :Minesh Mane <mineshmane94@gmail.com>
 *  @version        :1.0
 
 ******************************************************************************/



import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router,ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  hide = true;
  resetForm: FormGroup;


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }




  ngOnInit() {
    this.resetForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      cpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),

    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.resetForm.controls[controlName].hasError(errorName);
  }


  /********************************************************
      * @description this mehod is for resetPassword controller
      * @returns resylt true or false
      */
  resetPassword(resetFormValue) {
    try {
      const token = this.route.snapshot.paramMap.get('token');
      localStorage.setItem('token', token)
      const newPassword = {
        'newPassword': resetFormValue.password
      }
      console.log(" login event called ", resetFormValue);

      if (resetFormValue.password !== resetFormValue.cpassword) {
        this.snackBar.open('password didnot macth', '', { duration: 2000 });

      }
      else {


        this.userService.resetPassword(newPassword).subscribe(response => {
          console.log('response ', response);
          this.snackBar.open('password is changed  successfully ', '', { duration: 4000 });
          this.router.navigate(['/login']);


        }, error => {
          console.log('error ', error);

        });
      }
    } catch (error) {
      console.log(error);

    }

  }
}
