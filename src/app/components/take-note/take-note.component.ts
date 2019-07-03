import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { notes } from '../../model/notes'
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
  titleModel: String;
  contentModel: String;
  constructor(private notesService: NotesService, private router: Router, private snackBar: MatSnackBar) {
    this.titleModel = '';
    this.contentModel = '';

  }
  @Output() update = new EventEmitter<any>();

  ngOnInit() {
  }

  addNote() {
    try {
      this.isOpen = !this.isOpen;
      let newNote: notes = {
        title: this.title,
        description: this.description,


      }
      this.craeteNote(newNote);
    } catch (error) {
      console.log(error);

    }

  }

  craeteNote(note) {
    try {
      this.notesService.addnote(note).subscribe(response => {
        console.log('response ', response);
        this.update.emit({})
        this.snackBar.open('note added succesfully', '', { duration: 2000 });
        this.title = ''
        this.description = ''

      }, error => {
        console.log('error ', error);

      })
    } catch (error) {
      console.log(error);

    }

  }

}
