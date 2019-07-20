import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { notes } from '../../model/notes';
import { DataService } from '../../services/dataService/data.service'
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  isOpen = true;
  //hide = true;
  click() {
    this.isOpen = true;
  }
  title = '';
  description = '';
  labels = []
  setColor: any;
  setReminder: any;
  imageUrl = "";
  isArchived = '';
  isDeleted = '';
  isPined = '';
  collaboratorsArray = [];
  noteLabels = []

  constructor(private notesService: NotesService,
    private dataService: DataService, private router: Router, private snackBar: MatSnackBar,
    private dialog: MatDialog) {

  }
  @Output() update = new EventEmitter<any>();

  ngOnInit() {
    this.dataService.collaboratorEmmitedData.subscribe(response => {

      console.log(" take note  respomnse value", response);
      this.collaboratorsArray = response['data']
      console.log(" collaborator in the  take note ", this.collaboratorsArray);


    })
  }
  receivecolor($event) {
    console.log(" event in ");

    this.setColor = $event
  }
  receiveReminder($event) {
    this.setReminder = $event
    console.log(" reminder in take note ", this.setReminder);

  }
  receiveLabel($event) {
    this.labels = $event;
    console.log(" labels in label ", this.labels);
    this.noteLabels.push(this.labels)

  }


  openCollaboratorDialog(card): void {
    try {
      const dialogRef = this.dialog.open(CollaboratorComponent, {
        // width: '600px',
        // height: '275px',
        //data: { allCollborators: this.card }


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

  addNote() {
    try {
      this.isOpen = !this.isOpen;
      let newNote: notes = {
        title: this.title,
        description: this.description,
        color: this.setColor,
        imageUrl: this.imageUrl,
        reminder: this.setReminder,
       // labelIdList: JSON.stringify(this.noteLabels),
       // collaberators:JSON.stringify(this.collaboratorsArray),

      }

      if ((newNote.title || '' || newNote.description || '').trim().length === 0) {
        this.title = '';
        this.description = '';
        return;
      } else {
        this.craeteNote(newNote);
      }

    } catch (error) {
      console.log(error);

    }

  }

  // whiteSpace=(newNote)=> {
  //   const isWhitespace = (newNote.title || '').trim().length === 0;
  //   const isValid = !isWhitespace;
  //   return isValid ? null : { 'whitespace': true };
  // }
  craeteNote(note) {
    try {
      console.log(note, "undefin");

      if (note == '' || note == ' ') {
        console.log(" undefiended");

        return;
      } else {
        console.log(" creating note data", note);

        this.notesService.addnote(note).subscribe(response => {
          console.log('response ', response);
          this.update.emit({})
          this.snackBar.open('note added succesfully', '', { duration: 2000 });
          this.title = ''
          this.description = ''
          this.setColor = ''
          this.setReminder = ''

        }, error => {
          console.log('error ', error);

        })
      }
    } catch (error) {
      console.log(error);

    }

  }

}
