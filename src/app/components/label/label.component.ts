/******************************************************************************
 *  Execution       :cmd> node ng s                  
 *  @description    :dashboard whre some basic fumnctionality are implemented
 *  @file           :dashboard.ts
 *  @author         :Minesh Mane <mineshmane94@gmail.com>
 *  @version        :1.0
 
 ******************************************************************************/

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
  constructor(private route: ActivatedRoute, private notesService: NotesService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.getnoteByLabel()

    })
    // this.getnoteByLabel()
  }



  getnoteByLabel() {
    const label = this.route.snapshot.paramMap.get('label');
    console.log("label from route ", label);

    //localStorage.setItem('label',label)
    try {
      this.notesService.getNotesByLabel(label).subscribe(response => {
        console.log('response from service ', response);
        //  console.log(" responsee 3", response);

        this.notes = response['data'].data
        console.log("notes array ", this.notes);

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
