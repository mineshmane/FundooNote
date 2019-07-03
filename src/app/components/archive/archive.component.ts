import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notes=[];
  constructor(private noteService:NotesService) { }

  ngOnInit() {


    this.noteService.getArchiveNotesList().subscribe(response => {
      console.log('response ', response['data'].data);
      this.notes = response['data'].data
      this.notes.reverse();
    }, error => {
      console.log('error ', error);

    })
  }

}
