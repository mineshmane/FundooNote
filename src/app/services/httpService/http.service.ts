import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;
  post(url, user) {
    
    let options = {
     headers :new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  console.log(" https called");
    return this.http.post(this.baseUrl + url, user, options)
  }
  encodedPost(url,data){

  }

}
