import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { notes } from '../../model/notes';
import { DataService } from '../../services/dataService/data.service'
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
  labels = ''
  setColor: any;
  setReminder: any;
  imageUrl = "";
  isArchived = '';
  isDeleted = '';
  isPined = '';


  constructor(private notesService: NotesService,
    private dataService: DataService, private router: Router, private snackBar: MatSnackBar) {

  }
  @Output() update = new EventEmitter<any>();

  ngOnInit() {
    this.dataService.colorEmmitedData.subscribe(response => {

      console.log(" respomnse value", response);
      //  this.color = response['data']['color']

      //   console.log(" in take note coplor is ", this.color);

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
        noteLabels:this.labels,
       // "labelIdList":this.labels


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
