import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService: HttpService) { }


  /********************************************************
     * @description this service is for adding note   
     * @returns token
     */

  addCollaborator(userdata, data) {
    console.log(" note id", data.card.id);


    return this.httpService.postAth('notes/' + data.card.id + '/AddcollaboratorsNotes', userdata);
  }


  removeColaborator(noteId, userId) {
    return this.httpService.deleteData("notes/" + noteId.card.id + "/removeCollaboratorsNotes/" + userId);
  }


  /********************************************************
       * @description this service is for adding note   
       * @returns token
       */

  addnote(data) {
    return this.httpService.postAth('notes/addNotes', data);
  }

  /********************************************************
     * @description this service is for getting noteslist from db   
     * @returns token
     */
  getNotes() {
    return this.httpService.getNotes('notes/getNotesList');
  }

  /********************************************************
     * @description this service is for getting reminder setnotelist 
     * @returns token
     */
  getReminderNotesList() {
    return this.httpService.getNotes('notes/getReminderNotesList');
  }
  /********************************************************
     * @description this mehod is for getting list of archive notes   
     * @returns token
     */

  getArchiveNotesList() {
    return this.httpService.getNotes('notes/getArchiveNotesList');
  }



  /********************************************************
     * @description this service is for getting getting list of trash notes to display 
     * @returns token
     */
  getTrashNotesList() {
    return this.httpService.getNotes('notes/getTrashNotesList');

  }

  /********************************************************
     * @description this service is for archive the note 
     * @returns token
     */

  archiveNote(data) {
    console.log("user service called", data);
    return this.httpService.postAth('notes/archiveNotes', data);
  }

  /********************************************************
      * @description this service is for delete the note 
      * @returns token
      */
  deleteNote(data) {
    console.log("user service called", data);
    return this.httpService.postAth('notes/trashNotes', data);
  }

  /********************************************************
    * @description this service is for delete forever the note 
    * @returns token
    */
  deleteForeverNote(data) {
    console.log("user service called", data);
    return this.httpService.postAth('notes/deleteForeverNotes', data);
  }

  /********************************************************
    * @description this service is for pin the note 
    * @returns token
    */
  pinNote(data) {
    console.log("user service called", data);
    return this.httpService.postAth('notes/pinUnpinNotes', data);
  }

  /********************************************************
    * @description this service is for setcolor to  the note 
    * @returns token
    */
  setColor(data) {
    console.log("user service called", data);
    return this.httpService.postAth('notes/changesColorNotes', data);
  }
  /********************************************************
    * @description this service is for edit and upodate the note 
    * @returns token
    */

  updateNote(data) {
    console.log("user service called", data);
    return this.httpService.postAth('notes/updateNotes', data);
  }


  /********************************************************
    * @description this service is for add label to the notes 
    * @returns token
    */
  addLabel(data) {
    console.log("user service called", data);
    return this.httpService.postAth('noteLabels', data);
  }

  /********************************************************
    * @description this service is for getting label list  
    * @returns token
    */
  getLableList() {
    return this.httpService.getNotes('noteLabels/getNoteLabelList');
  }

  /********************************************************
    * @description this service is for delete label
    * @returns token
    */
  deletelabel(data) {
    console.log("note called id ", data.label.id);

    // let id = {
    //   userId: localStorage.getItem('userId'),
    // }
    return this.httpService.postlabel('noteLabels/' + data.label.id + '/deleteNoteLabel');
  }


  /********************************************************
    * @description this service is for  update and edit  label
    * @returns token
    */
  updateLabel(data) {
    console.log(" data in service in edit label", data);

    return this.httpService.postAth('noteLabels/' + data.id + '/updateNoteLabel', data);
  }

  /********************************************************
    * @description this service is for set label to the note 
    * @returns token
    */
  addLabelToNote(data) {
    console.log("noteservice", data);

    return this.httpService.postAth('notes/' + data.noteId + '/addLabelToNotes/' + data.lableId + '/add', {});
  }
  /********************************************************
    * @description this service is for remove label of note 
    * @returns token
    */
  removeNoteLabel(data) {
    console.log("noteservice", data);

    return this.httpService.postAth('notes/' + data.noteId + '/addLabelToNotes/' + data.lableId + '/remove', {});
  }



  /********************************************************
      * @description this service is for  update and edit  label
      * @returns token
      */
  setReminder(data) {
    console.log(" data in service in edit label", data);

    return this.httpService.postAth('notes/addUpdateReminderNotes', data);
  }


  /********************************************************
    * @description this service is for get notes list of by labelname list 
    * @returns token
    */
  getNotesByLabel(label) {
    console.log("noteservice", label);

    return this.httpService.postAth('notes/getNotesListByLabel/' + label, {});
  }


  removeNoteReminder(data) {
    return this.httpService.postAth('notes/removeReminderNotes', data);
  }


/**
   * @Purpose : add collaborator note
  **/
 addColNote(body, id) {
  //return this.httpservice.postDataForSearchUser("notes/" + id + "/AddcollaboratorsNotes", body)
  return this.httpService.postAth("notes/" + id + "/AddcollaboratorsNotes", body)
}
// removeColaborator(noteId, userId) {
//   return this.httpservice.deleteData("notes/" + noteId + "/removeCollaboratorsNotes/" + userId);
// }


}
