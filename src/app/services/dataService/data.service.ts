import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {





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

  private messageSource = new BehaviorSubject({ type: '', data: [] });
  currentMessage = this.messageSource.asObservable();

  constructor() { console.log(" data service called"); }

  changeMessage(message: any) {
    console.log(" data service called", message);
    this.messageSource.next(message)
  }


  private arrayData = new BehaviorSubject({ type: '', data: [] });
  currentData = this.arrayData.asObservable();
  changeData(message: any) {
    console.log(" data service called", message);
    this.arrayData.next(message)
  }


  private listData = new BehaviorSubject([]);
  viewListData = this.listData.asObservable();
  listViewData(message) {
    console.log(" data service called", message);
    this.listData.next(message)
  }

  private profileData = new BehaviorSubject([]);
  profilePicData = this.profileData.asObservable();
  setProfileData(message) {
    console.log(" data service called", message);
    this.profileData.next(message)
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




}
