import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  hide = true;

  constructor(private userService: UserService, private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  loginUser(loginFormvalue) {
    console.log(" login event called ", loginFormvalue);
    this.userService.login(loginFormvalue).subscribe(response => {
      console.log('response ', response);
      localStorage.setItem('token', response['id']);
      this.snackBar.open('login succesfully', '', { duration: 2000 });
      this.router.navigate(['/dashboard']);


    },error => {
      console.log('error ', error);
      this.snackBar.open("login failed  wrong password or username")
    });
  }
}
