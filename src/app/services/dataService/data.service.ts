import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  private messageSource = new BehaviorSubject({type:'',data:[]});
  currentMessage = this.messageSource.asObservable();

  constructor() { console.log(" data service called"); }

  changeMessage(message: any) {
    console.log(" data service called", message);
    this.messageSource.next(message)
  }
  

  private arrayData = new BehaviorSubject({type:'',data:[]});
  currentData = this.arrayData.asObservable();
  changeData(message: any) {
    console.log(" data service called", message);
    this.arrayData.next(message)
  }


  private listData = new BehaviorSubject([]);
  viewListData = this.listData.asObservable();
  
  listViewData(message) {
    console.log(" data service called", message);
    this.listData.next(message )
  }


}
