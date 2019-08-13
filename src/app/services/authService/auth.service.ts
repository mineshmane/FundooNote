import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  /**
   * @description :this method is for check the token is present or not
   * @returns boolean 
   */
logIn(){
  return !!localStorage.getItem('token');
}
}
