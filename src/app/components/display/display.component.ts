/************************************************************************************************
*  Execution       : 1. default node         cmd> display.component.ts 
*        
*  Purpose         :this component is for display note card i
* 
*  @file           : display.component.ts 
*  @module         : display.component.ts - This is optional if expeclictly its an npm or local package
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 28-2-2019
*
*************************************************************************************************/


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
import { MatSnackBar } from '@angular/material'
import { UpdateComponent } from '../update/update.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../services/dataService/data.service'
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  isList;
  direction: String = "row";
  wrap: string = "wrap";
  view1: any;
  // pin = true
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  islist;
  title = '';

  description = '';
  isPin: boolean = false;
  openCheckListArray = [];
  closeCheckListArray = [];
  tickBoxValue = true;
  tickBoxUpdate = true;
  constructor(
    private notesService: NotesService, private dataService: DataService, private route: Router,
    private bar: MatSnackBar,
    public dialog: MatDialog) { }
  @Input() childMessage;
  @Input() pinedMessage;
  @Input() unPinedMessage;
  @Input() trashMessage;
  @Input() isTrash;
  @Input() isArchive;
  @Input() card
  @Output() update = new EventEmitter<any>();
  @Output() notePined = new EventEmitter();
  @Output() onArchiveChange = new EventEmitter();
  @Output() removeLabel = new EventEmitter<any>();
  @Output() labelToNote = new EventEmitter<any>();
  @Output() reminderToNote = new EventEmitter<any>()
  @Output() removeReminder = new EventEmitter<any>();
  class = {
    listView: false,
    gridView: true
  }
  ngOnInit() {
    this.listView()
    if (this.card) {
      this.isPin = this.card.isPined;
    }

    // console.log(" list view ", this.isList);
    this.isList = localStorage.getItem('isListView')
    this.dataService.viewListData.subscribe(data => {
      // console.log(" data", data);

      this.islist = data;
      // console.log(" islist data in diplay", this.islist.data);
      /* Grid View*/
      this.dataService.getView().subscribe((response) => {
        this.view1 = response;
        this.direction = this.view1.data
      });

    })
  }

  EventFromCheckList(item) {
    console.log('i am run');
    this.openDialog(item);
    this.openDialog(item);
  }

  listView() {
    this.isList = localStorage.getItem('isListView')
    this.islist = 'http://34.213.106.173/' + this.isList;
  }

  /********************************************************
      * @description this method is for note pin  
      * @returns true/false
      */

  pin() {
    this.isPin = !this.isPin;
    // this.onChange.emit(this.isPin);
    // this.notePined.emit(this.isPin);
  }
  pinNote(card) {
    try {
      console.log(" card ", card);
      let data = {
        // cardidList:this.cardId,
        noteIdList: [card.id],
        isPined: this.isPin,
      }
      this.notesService.pinNote(data).subscribe(response => {
        console.log(response, " succsesfully pined ");
        this.notePined.emit();
        this.bar.open(" note pined succesFully ", '', { duration: 2000 });
      }, error => {
        console.log('error ', error);
      })
    } catch (error) {
      console.log(error);

    }

  }

  askquestion(card) {
    console.log(" label ts", card);

    this.route.navigate(['dashboard/askquestion/' + card.id]);

  }


  /**
    * @description: this method is for open collabortaor dialogbox
    *                component
    * @param      : note object
    */

  openCollaboratorDialog(card): void {
    try {
      const dialogRef = this.dialog.open(CollaboratorComponent, {
       
        //data: { allCollborators: this.card }

        data: { card }
      });
   
      dialogRef.afterClosed().subscribe(result => {
       
      });
    } catch (error) {
      console.log(error);

    }

  }

  /**
    * @description: this method is for remove note labels from note
    *                component
    * @param      : noteid,and label id
    */

  removeNoteLabel(label, card): void {
   

    let data = {
      noteId: [card.id],

      lableId: label.id
    }
    console.log("data ", data);

    this.notesService.removeNoteLabel(data).subscribe(response => {
      console.log("response", response);
      this.removeLabel.emit();
      this.bar.open(" label removed succesFully ", '', { duration: 2000 });
    }, error => {
      console.log(error);

    })
  }


   /**
    * @description: this method is for remove note reminder from note
    * @param      : noteid,reminder id
    */
  removeNoteReminder(reminder, card) {
    // console.log(card, " labelin ");
    // console.log("card in disp[lay", card);

    let data = {
      noteIdList: [card.id],
      userId: localStorage.getItem('userId')


    }
   

    this.notesService.removeNoteReminder(data).subscribe(response => {
      // console.log("response", response);
      this.removeReminder.emit();
      this.bar.open(" reminder removed succesFully ", '', { duration: 2000 });
    }, error => {
      console.log(error);

    })
  }

   /**
    * @description: this method is for open dialogbox for update note component
    *                component
    * @param      : note:object
    */

  openDialog(card): void {
    try {
      const dialogRef = this.dialog.open(UpdateComponent, {
        panelClass: 'updateDialog',
        data: { card }
      });
      console.log(" in card ", card);


      dialogRef.afterClosed().subscribe(result => {

        // console.log('The dialog was closed', result);
        this.title = result;
      }, error => {
        console.log('error ', error);
      });
    } catch (error) {
      console.log(error);

    }

  }

  //event emmiter for trash note update
  getTrashNotes() {
    this.update.emit();
  }
  // event emmit fro label add and dlete 
  labelAddedToNote() {
    this.labelToNote.emit();
  }
  // ebent emmiter for add reminder to note 
  reminderAddedToNote() {
    this.reminderToNote.emit();
  }

  // event emmiter for when note archive
  onArchive() {
    this.onArchiveChange.emit();
  }
}
