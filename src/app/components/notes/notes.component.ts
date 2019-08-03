import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
import { DataService } from '../../services/dataService/data.service';
import { Collaborator } from 'src/app/model/register';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private notesService: NotesService, private dataService: DataService) {

  } //message:string;
  notes = []
  pinedArray = [];
  unpinedArray = [];
  ngOnInit() {
    this.getAllNote()
    this.dataService.collaboratorEmmitedData.subscribe(response => {
      this.getAllNote();
    })
  }


  getAllNote() {
    try {
      this.notesService.getNotes().subscribe(response => {
        console.log('response  ', response['data'].data);
        console.log(" responsee 3", response);

        this.notes = response['data'].data


        this.pinedArray = [];
        this.unpinedArray = []
        this.notes.reverse();
        for (let i = this.notes.length; i > 0; i--) {
          if ((this.notes[i - 1]["isDeleted"] == false) && (this.notes[i - 1]["isArchived"] == false)) {
            if (this.notes[i - 1]["isPined"] == true) {
              this.pinedArray.push(this.notes[i - 1]);
              this.pinedArray.reverse();
             
            }
            else {
              this.unpinedArray.push(this.notes[i - 1]);
              this.unpinedArray.reverse();
              
            }
          }
        } console.log("pinned array@@@@@@@", this.pinedArray);
        console.log("unpinned array@@@@@@@", this.unpinedArray);
      }, error => {
        console.log('error ', error);

      })
    } catch (error) {
      console.log(error);

    }


  }


}

