import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from "./services/authService/auth.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuradService implements CanActivate{

  constructor(private authservice:AuthService,private router:Router){

  }



  canActivate():boolean{
    if(this.authservice.logIn()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
  
    }
  }
}
