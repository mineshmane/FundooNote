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
  class = true
  description = '';
  isPin;
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
  @Input() card;
  @Output() update = new EventEmitter<any>();
  @Output() notePined = new EventEmitter();
  @Output() onArchiveChange = new EventEmitter();
  @Output() removeLabel = new EventEmitter<any>();
  @Output() labelToNote = new EventEmitter<any>();
  @Output() reminderToNote = new EventEmitter<any>()
  @Output() removeReminder = new EventEmitter<any>();

  ngOnInit() {
    this.listView()
    if (this.card) {
      this.isPin = this.card.isPined;
    }

    // console.log(" list view ", this.isList);
    this.isList = localStorage.getItem('isListView')
    this.dataService.viewListData.subscribe(data => {
      // console.log(" data", data);
      this.grid(data)
      // this.islist = data['data'];
      // console.log(" islist data in diplay", this.islist);
      /* Grid View*/
      // this.dataService.getView().subscribe((response) => {
      //   this.view1 = response;
      //   this.direction = this.view1.data
      // });

    })
  }
  public ListClass = {
    "listView": this.class,
    "gridView": !this.class,
  }


  public gridClass = {
    "mainCard": this.class,
    "mainCardGrid": !this.class,
  }
  public mainClass = {
    "main1": this.class,
    // "main1a": this.sidnav,
    "main2": !this.class,
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

  /**
   * @description this method is for handle service for grid view or list view change css class according to grid
   * @param data 
   * @returns nothing
   */
  grid(data) {
    console.log(" data in grid method", data, '   ');
    console.log(" data ", data.view);


    try {
      if (data.view != undefined)
        if (data.view != this.class) {
          console.log(" this. class ", this.class);
          console.log(" this. data .view", data.view);

          this.class = data.view;
          this.gridClass.mainCard = this.class;
          this.gridClass.mainCardGrid = !this.class;
          this.mainClass.main1 = this.class;
          this.mainClass.main2 = !this.class;
        }
    } catch (error) {
      console.log('error in grid  in display component');

    }

  }

  updateEventFromIcon(event) {
    if (event.type == 'tickBox') {

      this.tickBoxValue = event;
      this.tickBoxUpdate = event.value;
    }
  }
  /********************************************************
      * @description this method is for note pin  
      * @returns true/false
      */

  pin() {

    this.isPin = !this.isPin;

    // this.onChange.emit(this.isPin);
    this.notePined.emit(this.isPin);
  }

  addlabel(event: any) {
    console.log(" this is onchange label wmmiter in dospalyu ");
    console.log("label in display", event);

  }

  pinNote(card) {
    try {


      if (card) {
        this.isPin = card.isPined;
        this.isPin = !this.isPin;
      }
      console.log(" card ", card);
      let data = {
        // cardidList:this.cardId,
        noteIdList: [card.id],
        isPined: this.isPin,
        // isPined: true,
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

    this.route.navigate(['dashboard/askquestions/' + card.id]);

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



  /**
   * @description this method is for open dialog box for update the card 
   * @param notes whole card object
   * @emits event
   * @returns nothing
   */
  openDialogup(card): void {
    try {
      // notes.toWhom = 'icon';
      // console.log(this.Type, '   ');
      // notes.type = this.Type
      // this.gridview = localStorage.getItem('gridView');
      // console.log('grid view in 306 ', this.gridview);
      localStorage.setItem('updateId', card.id);
      //problem in this line 
      // this.data.changeMessage(notes); 
      // localStorage.setItem('gridView', 'true')

      console.log('i am call ', card);
      // this.gridview = localStorage.getItem('gridView');
      //  check box open or close
      card.checkBox = this.tickBoxUpdate;
      console.log(this.tickBoxUpdate);


      // console.log('grid view in dialog in 303', this.gridview)
      const dialogRef = this.dialog.open(UpdateComponent, {
        panelClass: 'updateDialog',
        width: '600px',
        maxWidth: 'auto',
        maxHeight: '600px',
        data: { card }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // console.log('grid view after close dialog in 314', this.gridview)
        localStorage.removeItem('updateId');
        console.log(result, 'result is ');
        card.close = true;
        if (result != undefined) {
          // if (result.whichUpdate.colorChange) {

          //   this.updatecolor(result);
          // }
          if (result.whichUpdate.isArchivedChange) {
            // this.addToArchived(result);
            // if (this.Type == 'archive') {
            //   let ind;
            //   if (result.isPined) {
            //     ind = this.cardpin.indexOf(result);
            //     console.log('index is ', ind);

            //   }
            // }
          }

        }
        this.update.emit({});
      });
    } catch (error) {
      console.log('error in open dailog in display component');

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
