import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService: HttpService) { }



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
  setColor(data){
    console.log("user service called", data);
   return this.httpService.postAth('notes/changesColorNotes',data);
  }

  updateNote(data){
    console.log("user service called", data);
   return this.httpService.postAth('notes/updateNotes',data);
  }
  

  addLabel(data) {
    console.log("user service called", data);
    return this.httpService.postAth('noteLabels', data);
  }
  getLableList() {
    return this.httpService.getNotes('noteLabels/getNoteLabelList');
  }

  deletelabel(data) {
    console.log("note called id ", data.label.id);

    // let id = {
    //   userId: localStorage.getItem('userId'),
    // }
    return this.httpService.postlabel('noteLabels/'+data.label.id+'/deleteNoteLabel');
  }
  updateLabel(data) {
    return this.httpService.postlabel('noteLabels/'+data.label.id+'/updateNoteLabel');
  }
}
