import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/register';
import { UserService } from '../../services/userService/user.service';

import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registerForm: FormGroup;
  hide=true;
  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      cpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }


  registerUser = (registerFormValue) => {
    console.log(registerFormValue);
    if (registerFormValue.password !== registerFormValue.cpassword) {
      this.snackBar.open('password didnot macth', '', { duration: 2000 });

    }else{if (this.registerForm.invalid) {
      return
    } else {
      this.createUser(registerFormValue)
    }}
    
  }

  private createUser = (registerFormValue) => {
    let newUser: User = {
      firstName: registerFormValue.firstName,
      lastName: registerFormValue.lastName,
      email: registerFormValue.email,
      password: registerFormValue.password,
      service: 'advance'
    }
    console.log("new user created ", newUser);

    this.userService.register(newUser).subscribe(response => {
      console.log('response ', response);
      this.snackBar.open('register succesfully', '', { duration: 2000 });
      this.router.navigate(['/login']);

    }, error => {
      console.log('error ', error);

    })

  }




}