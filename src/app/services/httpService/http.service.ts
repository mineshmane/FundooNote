/************************************************************************************************        
*  Purpose         : To send request to http client methods service
* 
*  @file           : http.service.ts
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 4-2-2019
*
*************************************************************************************************/


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
// baseUrl;
  constructor(private http: HttpClient) {
  
   }
   baseUrl = environment.baseUrl;

  post(url, user) {

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(" https called");
    return this.http.post(this.baseUrl + url, user, options)
  }

  encode(data) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  encodedPost(url, data) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    return this.http.post(this.baseUrl + url, this.encode(data), options)
  }
  setphoto(url, data) {
    console.log(" httpt ", url, "data ", data);

    let opt = {


      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'Authorization': localStorage.getItem('token'),
        'Accept': 'application/json'
      })

    }
    return this.http.post(this.baseUrl + url, this.encode(data), opt)

  }



  postAth(url, data) {
    console.log("http service called", url, data);
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'

      })
    }
    return this.http.post(this.baseUrl + url, data, options)

  }


  postData(path, body) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.post(environment.baseUrl + path, body, httpAuthOptions);
  }
  getNotes(url) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'

      })
    }
    return this.http.get(this.baseUrl + url, options)

  }


  postlabel(url) {
    console.log("http service called");
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'

      })
    }
    return this.http.delete(this.baseUrl + url, options)

  }


  postWithoutHeader(url, data) {
    var httpOption = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    }

    console.log("data");
    return this.http.post(this.baseUrl + url, data, httpOption);
  }




  deleteData(path) {
    let httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.delete(this.baseUrl + path, httpOptions);
  }



  postDataService(path, body) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(this.baseUrl + path, body, httpAuthOptions);
  }

  getDataService(path) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //  'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.get(this.baseUrl + path, httpOptions);
  }

  getData(path) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.get(this.baseUrl + path, httpOptions);
  }
}