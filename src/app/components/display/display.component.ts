import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
import { MatSnackBar } from '@angular/material'
import { UpdateComponent } from '../update/update.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../services/dataService/data.service'
import { CollaboratorComponent } from '../collaborator/collaborator.component';

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
  pin = true
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  islist;
  title = '';
  description = '';
  constructor(
    private notesService: NotesService, private dataService: DataService,
    private bar: MatSnackBar,
    public dialog: MatDialog) { }
  @Input() childMessage;
  @Input() pinedMessage;
  @Input() isTrash;
  @Input() card
  @Output() update = new EventEmitter<any>();
  @Output() removeLabel = new EventEmitter<any>();
  @Output() labelToNote = new EventEmitter<any>();
  @Output() reminderToNote = new EventEmitter<any>()
  @Output() removeReminder = new EventEmitter<any>();

  ngOnInit() {
    this.listView()
    console.log(" list view ", this.isList);
    this.isList = localStorage.getItem('isListView')
    this.dataService.viewListData.subscribe(data => {
      console.log(" data", data);

      this.islist = data;
      console.log(" islist data in diplay", this.islist.data);
      /* Grid View*/
      this.dataService.getView().subscribe((response) => {
        this.view1 = response;
        this.direction = this.view1.data
      });

    })
  }


  listView() {

    this.isList = localStorage.getItem('isListView')
    this.islist = 'http://34.213.106.173/' + this.isList;
  }

  /********************************************************
      * @description this method is for note pin  
      * @returns true/false
      */
  pinNote(card) {
    try {
      console.log(" card ", card);
      let data = {
        // cardidList:this.cardId,
        noteIdList: [card.id],
        isPined: this.pin,
      }
      this.notesService.pinNote(data).subscribe(response => {
        console.log(response, " succsesfully pined ");
        this.update.emit();
        this.bar.open(" note pined succesFully ", '', { duration: 2000 });
      }, error => {
        console.log('error ', error);
      })
    } catch (error) {
      console.log(error);

    }

  }


  openCollaboratorDialog(card): void {
    try {
      const dialogRef = this.dialog.open(CollaboratorComponent, {
        // width: '600px',
        // height: '275px',
        //data: { allCollborators: this.card }

        data: { card }
      });
      // console.log(" in card ",card);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        //this.title = result;
      });
    } catch (error) {
      console.log(error);

    }

  }

  removeNoteLabel(label, card): void {
    console.log(label.id, " labelin ");
    console.log("card in disp[lay", card.id);

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

  removeNoteReminder(reminder, card) {
    console.log(card, " labelin ");
    console.log("card in disp[lay", card);

    let data = {
      noteIdList: [card.id],
      userId: localStorage.getItem('userId')


    }
    console.log("data ", data);

    this.notesService.removeNoteReminder(data).subscribe(response => {
      console.log("response", response);
      this.removeReminder.emit();
      this.bar.open(" label removed succesFully ", '', { duration: 2000 });
    }, error => {
      console.log(error);

    })
  }


  openDialog(card): void {
    try {
      const dialogRef = this.dialog.open(UpdateComponent, {
        // width: '700px',
        // height: '200px',
        panelClass: 'updateDialog',
        data: { card }
      });
      console.log(" in card ", card);


      dialogRef.afterClosed().subscribe(result => {

        console.log('The dialog was closed', result);
        this.title = result;
      }, error => {
        console.log('error ', error);
      });
    } catch (error) {
      console.log(error);

    }

  }
  getTrashNotes() {
    this.update.emit();
  }
  labelAddedToNote() {
    this.labelToNote.emit();
  }
  reminderAddedToNote() {
    this.reminderToNote.emit();
  }
}
