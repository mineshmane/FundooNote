/************************************************************************************************
*  Execution       : 1. default node         cmd> trash.ts 
*        
*  Purpose         :this component is for getting trash notes from database
* 
*  @file           : trash.ts
*  @module         : trash.ts - 
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 28-2-2019
*
*************************************************************************************************/

import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notes = [];
  pinedArray = []
  unpinedArray = []
  constructor(private notesService: NotesService) { }
  ngOnInit() {
    this.getTrashNotes();
  }
  getTrashNote() {
    this.getTrashNotes();

  } getTrashNotes() {
    console.log(" after emmit fired");

    try {
      this.notesService.getTrashNotesList().subscribe(response => {
        this.notes = response['data'].data
        console.log(" respoinsee data ", response['data'].data);
        this.notes.reverse();

        this.pinedArray = [];
        this.unpinedArray = []
        this.notes.reverse();
        for (let i = this.notes.length; i > 0; i--) {
       
            if (this.notes[i - 1]["isPined"] == true) {
              this.pinedArray.push(this.notes[i - 1]);
              this.pinedArray.reverse();
              console.log("pinned array@@@@@@@", this.pinedArray);
            }
            else {
              this.unpinedArray.push(this.notes[i - 1]);
              this.unpinedArray.reverse();
              console.log("unpinned array@@@@@@@", this.unpinedArray);
            }

        }

      }, error => {
        console.log("error", error);

      })
    } catch (error) {
      console.log(error);

    }
  }

}
