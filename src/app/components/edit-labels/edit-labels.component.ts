/************************************************************************************************
*  Execution       : 1. default node         cmd> edit-labels.ts 
*        
*  Purpose         : this component is for create and edit and delete labels
* 
*  @file           :  edit-labels.ts 
*  @module         :  edit-labels.ts - This is optional if expeclictly its an npm or local package
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 28-2-2019
*
*************************************************************************************************/


import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from '../../services/notes-service/notes.service';
import { DataService } from '../../services/dataService/data.service';
import { MatSnackBar } from '@angular/material'


@Component({
  selector: 'app-edit-labels',
  templateUrl: './edit-labels.component.html',
  styleUrls: ['./edit-labels.component.scss']
})
export class EditLabelsComponent implements OnInit {
  message: any;
  allLabel = []
  constructor(public dialogRef: MatDialogRef<EditLabelsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private noteService: NotesService,
    private dataService: DataService, private bar: MatSnackBar) {
    console.log(" data in update", data);
    this.allLabel = data.allLabel
    console.log(" labels", this.allLabel);

    this.changeText = false;
  }

  @Output() labeladd = new EventEmitter<any>();
  @Output() labelDelete = new EventEmitter<any>();

  ngOnInit() {
    // this.dataService.currentMessage.subscribe(message =>{
    //   this.allLabel=message
    // })

  }

    /**
    * @description: this method is for create new label 
    *                component
    * @param      : label name
    */

  addLabel(lab) {
    try {
      this.allLabel.push(lab)
      if (lab == undefined) {
        console.log(" empty");
        this.dialogRef.close();
        return;
      } else {
        console.log(" card ", lab);
        let data = {

          label: lab,
          isDeleted: false,
          userId: localStorage.getItem('userId')

        }
        this.noteService.addLabel(data).subscribe(response => {
          console.log(response, " succsesfully updated note ");
          this.bar.open(" label added succesFully ", '', { duration: 2000 });
          this.labeladd.emit({});
          this.dataService.labelDatasend({

          })

        }, error => {
          console.log('error ', error);
        })
      }

    } catch (error) {
      console.log(error);

    }
  }
  done() {
    this.dialogRef.close();
  }


    /**
    * @description: this method is for delete label
    *                component
    * @param      : label:object
    */

  deleteLabel(deleteLabel) {
    try {
      // console.log(deleteLabel, "data in edit delete label");
      // console.log("label id", deleteLabel.id);
      // this.allLabel.splice(deleteLabel)

      for (let i = 0; i < this.allLabel.length; i++) {
        if (this.allLabel[i] == deleteLabel) {
          this.allLabel.splice(i, 1);
        }
      }


      let data = {

        label: deleteLabel
      }
      this.noteService.deletelabel(data).subscribe(response => {
        // console.log(" label deleted successfully ", response);
        this.labelDelete.emit({});
        this.dataService.labelDatasend({
          data: {},
          type: 'profile'
        })
        this.bar.open("label deleted sucessfully");
      }, error => {
        console.log('error ', error);
      })
    } catch (error) {
      console.log('error ', error);
    }

  }
    /**
    * @description: this method is for update labels
    * @param      : label object
    */

  editLabel(lab) {
    // console.log(" label in edit label", lab);

    let data = {
      id: lab.id,
      label: lab.label,
      userId: localStorage.getItem('userId')
    }
    this.noteService.updateLabel(data).subscribe(response => {
      console.log("rsponse", response);

    })
  }

  changeText: boolean = true;

}
