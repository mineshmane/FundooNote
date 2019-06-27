import { Injectable } from '@angular/core';

import { HttpService } from '../httpService/http.service';

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
    console.log("user service called", data);

    return this.httpService.encodedPost('user/reset-password', data);
  }
  addnote(data) {
    return this.httpService.postAth('notes/addNotes', data);
  }
  getNotes(){
    return this.httpService.getNotes('notes/getNotesList');
  }

  getReminderNotesList(){
    return this.httpService.getNotes('notes/getReminderNotesList');
  }

  getArchiveNotesList(){
    return this.httpService.getNotes('notes/getArchiveNotesList');
  }
  getTrashNotesList(){
    return this.httpService.getNotes('notes/getTrashNotesList');
  
  }

  archiveNote(data){
    console.log("user service called", data);
   return this.httpService.postAth('notes/archiveNotes',data);
  }
  deleteNote(data){
    console.log("user service called", data);
   return this.httpService.postAth('notes/trashNotes',data);
  }


  pinNote(data){
    console.log("user service called", data);
   return this.httpService.postAth('notes/pinUnpinNotes',data);
  }
}
