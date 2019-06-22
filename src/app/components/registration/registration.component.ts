import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/register';
import { UserService } from '../../services/userService/user.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';





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
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.cpassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

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