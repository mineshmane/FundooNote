import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
import { DataService } from '../../services/dataService/data.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private notesService: NotesService,private dataService :DataService) { 

  } //message:string;
notes=[]
  ngOnInit() {

   this.newNote()


  }

  //parentMessage = "message from parent"
  newNote() {
    try {
      this.notesService.getNotes().subscribe(response => {
        console.log('response  ', response['data'].data);
        console.log(" responsee 3",response);
        
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

