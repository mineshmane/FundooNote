import { Injectable } from '@angular/core';

import { HttpService } from '../httpService/http.service';

import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  register(user) {
    console.log("user service called");

    return this.httpService.post('user/userSignUp', user);
  }
  login(data) {
    console.log("user service called");

    return this.httpService.post('/user/login', data);
  }
  forgetPassword(data) {
    console.log("user service called");

    return this.httpService.post('/user/reset', data);
  }
  resetPassword(data) {
    console.log("user service called",data);

    return this.httpService.encodedPost('user/reset-password', data);
  }


}
