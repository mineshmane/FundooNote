import { Injectable } from '@angular/core';

import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }


  /********************************************************
      * @description this service is for signUp  pupose  
      * @returns token
      */
  register(user) {
    console.log("user service called");

    return this.httpService.post('user/userSignUp', user);
  }

  /********************************************************
      * @description this mehod is for login pupose  
      * @returns token
      */
  login(data) {
    console.log("user service called");

    return this.httpService.post('/user/login', data);
  }

  /********************************************************
      * @description this mehod is for logoutuser  
      * @returns token
      */
  logoutUser() {
    console.log("user service called");

    return this.httpService.post('/user/logout', {});
  }
  /********************************************************
      * @description this mehod is for forget password  pupose  
      * @returns token
      */

  forgetPassword(data) {
    console.log("user service called");

    return this.httpService.post('/user/reset', data);
  }

  /********************************************************
      * @description this service is for reset password   
      * @returns token
      */
  resetPassword(data) {
    console.log("user service called", data);

    return this.httpService.encodedPost('user/reset-password', data);
  }


   /********************************************************
      * @description this service is for signUp  pupose  
      * @returns token
      */
     uploadProfileImage(data) {
      console.log("user service called",data);
  
      return this.httpService.encodedPost('user/uploadProfileImage', data);
    }
  
    profilePic(url,body){
      return this.httpService.postWithoutHeader(url,body);
  
    }
    searchUserList(data){
     return this.httpService.postAth('user/searchUserList',data)
    }
    getService(){
      return this.httpService.getDataService("user/service")
    }

}
