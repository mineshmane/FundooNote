/************************************************************************************************
*  Execution       : 1. default node         cmd> archive.component.ts
*        
*  Purpose         :this component is for get All archive notes 
* 
*  @file           :  archive.component.ts
*  @module         :  archive.component.ts - This is optional if expeclictly its an npm or local package
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 28-2-2019
*
*************************************************************************************************/


import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notes = [];
  pinedArray = [];
  unpinedArray = [];
  labels;
  constructor(private noteService: NotesService) { }

  ngOnInit() {

    this.getArchiveNote();

  }

   /**
    * @description: this method is for getting the all Archive notecard from backend
    *                component
    * @param      : notes Array
    */
  getArchiveNote() {
    this.pinedArray = [];
    this.unpinedArray = []
    this.noteService.getArchiveNotesList().subscribe(response => {
      console.log('response ', response['data'].data);
      this.notes = response['data'].data

      this.notes.reverse();
      if (this.notes.length > 0) {
        for (let i = this.notes.length; i > 0; i--) {
          if (this.notes[i - 1]["isDeleted"] == true) {
            this.labels = true
          } else {
            this.labels = false
          }
        }
      } else {
        this.labels = false
      }
      for (let i = this.notes.length; i > 0; i--) {
        if (this.notes[i - 1]["isDeleted"] == false) {
          if (this.notes[i - 1]["isPined"] == true) {
            this.pinedArray.push(this.notes[i - 1]);
            this.pinedArray.reverse();

            if (this.pinedArray.length > 0) {
              for (let i = this.pinedArray.length; i > 0; i--) {
                if (this.pinedArray[i - 1]["isDeleted"] == true) {
                  this.labels = true
                } else {
                  this.labels = false
                }
              }
            } else {
              this.labels = false
            }
            console.log("pinned array@@@@@@@", this.pinedArray);
          }
          else {
            this.unpinedArray.push(this.notes[i - 1]);
            this.unpinedArray.reverse();
            if (this.unpinedArray.length > 0) {
              for (let i = this.unpinedArray.length; i > 0; i--) {
                if (this.unpinedArray[i - 1]["isDeleted"] == true) {
                  this.labels = true
                } else {
                  this.labels = false
                }
              }
            } else {
              this.labels = false
            }
            console.log("unpinned array@@@@@@@", this.unpinedArray);
          }
        }
      }
    }, error => {
      console.log('error ', error);

    })
  }


}
