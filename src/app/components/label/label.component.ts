/************************************************************************************************
*  Execution       : 1. default node         cmd> label.component.ts 
*        
*  Purpose         :this component is for get all notes by label Name  
* 
*  @file           : label.component.ts 
*  @module         : label.component.ts  - This is optional if expeclictly its an npm or local package
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 13-7-2019
*
*************************************************************************************************/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../services/notes-service/notes.service'
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  notes = []
  pinedArray = [];
  unpinedArray = [];
  labels: any;
  constructor(private route: ActivatedRoute, private notesService: NotesService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.getnoteByLabel()

    })
    // this.getnoteByLabel()
  }




   /**
    * @description: this method is for getNotes By label name or Id
    *                component
    * @param      : note object
    */
  getnoteByLabel() {
    const label = this.route.snapshot.paramMap.get('label');
    console.log("label from route ", label);
    this.pinedArray = [];
    this.unpinedArray = [];
    //localStorage.setItem('label',label)
    try {
      this.notesService.getNotesByLabel(label).subscribe(response => {
    

        this.notes = response['data'].data
        console.log("notes array ", this.notes);
        if (this.notes.length > 0) {
          this.labels = false
        } else {
          this.labels = true
        }
        this.notes.reverse();
        for (let i = this.notes.length; i > 0; i--) {
          if ((this.notes[i - 1]["isDeleted"] == false) && (this.notes[i - 1]["isArchived"] == false)) {
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
