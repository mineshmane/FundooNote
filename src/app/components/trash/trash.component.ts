import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notes=[];
  constructor(private notesService:NotesService) { }

  ngOnInit() {
  this.getTrashNotes();
  }
  getTrashNotes(){
    try {
      this.notesService.getTrashNotesList().subscribe(response =>{
        this.notes=response['data'].data
        console.log(" respoinsee data ",response['data'].data);
        this.notes.reverse();
        
        },error=>{
    console.log("error",error);
    
        })
    } catch (error) {
      console.log(error);
      
    }
  }

}
