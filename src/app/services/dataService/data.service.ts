import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
 
  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();

  constructor() { console.log(" data service called"); }

  changeMessage(message: any) {
    console.log(" data service called",message);
    this.messageSource.next(message)
  }

}
