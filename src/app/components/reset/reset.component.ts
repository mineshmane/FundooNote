import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';






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

  resetPassword(resetFormValue) {
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
  }
}
