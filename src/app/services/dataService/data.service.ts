/************************************************************************************************        
*  Purpose         : To share data from one component to another component data  service
* 
*  @file           : data.service.ts
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 4-2-2019
*
*************************************************************************************************/


import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  sidenavValue=false;
  constructor() { console.log(" data service called"); }

  /* Required for Grid*/
  result: boolean = true;
  subject = new Subject

  /* gridView method*/
  gridView() {
    if (this.result) {
      this.subject.next({ data: "column" });
      this.result = false;
    }
    else {
      this.subject.next({ data: "row" });
      this.result = true;
    }
  }

  getView() {
    this.gridView();
    return this.subject.asObservable();
  }
  obj = {

    view: localStorage.getItem('isListView') == undefined ? 'true' : localStorage.getItem('isListView')
   
  }


  private messageSource = new BehaviorSubject({ type: '', data: [] });
  currentMessage = this.messageSource.asObservable();

  

  changeMessage(message: any) {
    console.log(" data service called", message);
    this.messageSource.next(message)
  }


  private arrayData = new BehaviorSubject({ type: '', data: [] });
  currentData = this.arrayData.asObservable();
  changeData(message: any) {
    // console.log(" data service called", message);
    this.arrayData.next(message)
  }


  private listData = new BehaviorSubject(this.obj);
  viewListData = this.listData.asObservable();
  
  listViewData(message:any) {

    this.listData.next(message)
  }

  private profileData = new BehaviorSubject([]);
  profilePicData = this.profileData.asObservable();
  
  setProfileData(message) {

    this.profileData.next(message)
  }



  private updateNote = new BehaviorSubject([]);
  noteUpdated = this.updateNote.asObservable();
  
  noteUpdate(message:any) {
    console.log(" data serbice calling ",message);
    
    this.updateNote.next(message)
  }


  private labelData = new BehaviorSubject([]);
  labelEmmitedData = this.labelData.asObservable();
  labelDatasend(message) {
    console.log(" data service called", message);
    this.labelData.next(message)
  }


  private collaboratorData = new BehaviorSubject([]);
  collaboratorEmmitedData = this.collaboratorData.asObservable();
  collaboratorDatasend(message) {
    console.log(" data service called", message);
    this.collaboratorData.next(message)
  }

  private colorData = new BehaviorSubject([]);
  colorEmmitedData = this.colorData.asObservable();
  colorDatasend(message) {
    console.log(" data service called", message);
    this.colorData.next(message)
  }

 /*
  * @Description  : Add and send reply questions and answers
  */
 private messageQuestion = new BehaviorSubject('default');
 currentMessageQuestion = this.messageQuestion.asObservable();
 getNotesDetail(message: string){
   this.messageQuestion.next(message)
 }

 private sideNav = new BehaviorSubject(this.sidenavValue);
  sideNaveMessage = this.sideNav.asObservable();
  sideNaveData(value: any) {
    this.sideNav.next(value)
  }


}
