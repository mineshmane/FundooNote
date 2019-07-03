import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  notes=[];
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
      }, error => {
        console.log('error ', error);
  
      })
    } catch (error) {
      console.log(error);
      
    }
  }

}
