/************************************************************************************************
*  Execution       : 1. default node         cmd> reminder.component.ts 
*        
*  Purpose         :this component is for get notes which has reminders
* 
*  @file           : reminder.component.ts 
*  @module         : reminder.component.ts  - This is optional if expeclictly its an npm or local package
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 28-7-2019
*
*************************************************************************************************/

import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  notes = [];
  pinedArray = []
  unpinedArray = []
  labels: boolean;
  constructor(private notesService: NotesService) { }

  ngOnInit() {

    this.reminderNoteList()
  }

  reminderNoteList() {
    try {
      this.notes = [];
      this.pinedArray = []
      this.unpinedArray = []
      this.notesService.getReminderNotesList().subscribe(response => {
        console.log('response ', response['data'].data);
        this.notes = response['data'].data
        this.notes.reverse();
        if (this.notes.length > 0) {
          this.labels = false
        } else {
          this.labels = true
        }
        for (let i = this.notes.length; i > 0; i--) {
          if (this.notes[i - 1]["isDeleted"] == false) {
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
        }
      }, error => {
        console.log('error ', error);

      })
    } catch (error) {
      console.log(error);

    }
  }

}
