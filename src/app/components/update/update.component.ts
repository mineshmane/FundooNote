import { Component, OnInit, Inject } from '@angular/core';
import { notes } from 'src/app/model/notes';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from '../../services/notes-service/notes.service';

import { MatSnackBar } from '@angular/material'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  labels = [];
  collaborators = [];
  reminders = [];
  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private noteService: NotesService, private bar: MatSnackBar) {
    console.log(" data in update", data);
    this.collaborators = data.card.collaborators
    console.log(" this is collab in update", this.collaborators);

    this.labels = data.card.noteLabels
    console.log(" labels in update", this.labels);
    this.reminders=data.card.reminder
    console.log(" reminder in update",this.reminders);
    


  }


  ngOnInit() {


  }

  updateNote(card) {
    try {
      console.log(" card ", card);
      let data = {
        // cardidList:this.cardId,
        noteId: card.id,
        title: card.title,
        description: card.description

      }
      this.noteService.updateNote(data).subscribe(response => {
        console.log(response, " succsesfully updated note ");
        this.bar.open(" note update succesFully ", '', { duration: 2000 });
      })

      this.dialogRef.close();
    } catch (error) {
      console.log(error);

    }

  }
}
