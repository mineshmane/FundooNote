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
export class ForgetComponent implements OnInit {
  public forgetForm: FormGroup;


  constructor(private userService: UserService, private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.forgetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.forgetForm.controls[controlName].hasError(errorName);
  }



  forgetPassword(forgetFormvalue) {
    console.log(" login event called ", forgetFormvalue);
    this.userService.forgetPassword(forgetFormvalue).subscribe(response => {
      console.log('response ', response);
      this.snackBar.open('please cheack your mail for reset password ', '', { duration: 4000 });
     // this.router.navigate(['/login']);


    });
  }

}

