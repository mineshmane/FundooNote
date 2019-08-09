import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  notes=[];
  pinedArray=[]
  unpinedArray=[]
  constructor(private notesService:NotesService) { }

  ngOnInit() {

   this.reminderNoteList()
  }

  reminderNoteList(){
    try {
      this.notesService.getReminderNotesList().subscribe(response => {
        console.log('response ', response['data'].data);
        this.notes = response['data'].data
        this.notes.reverse();
        for (let i = this.notes.length; i > 0; i--) {
          if (this.notes[i - 1]["isDeleted"] == false){
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
