import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { notes } from 'src/app/model/notes';
import { NotesService } from '../../services/notes-service/notes.service';

import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-edit-labels',
  templateUrl: './edit-labels.component.html',
  styleUrls: ['./edit-labels.component.scss']
})
export class EditLabelsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditLabelsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: notes, private noteService: NotesService, private bar: MatSnackBar) {
    console.log(" data in update", data);

  }
  ngOnInit() {

  }
  addLabel(lab) {
    console.log(" card ", lab);
    let data = {
      // cardidList:this.cardId,
      // noteId: card.id,
      label: lab,
      isDeleted: false,
      userId:localStorage.getItem('userId')

    }
    this.noteService.addLabel(data).subscribe(response => {
      console.log(response, " succsesfully updated note ");
      this.bar.open(" note update succesFully ", '', { duration: 2000 });
    })

    this.dialogRef.close();
  }
}
