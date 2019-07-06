import { Component, OnInit, Inject, Output , EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { notes } from 'src/app/model/notes';
import { NotesService } from '../../services/notes-service/notes.service';
import { DataService } from '../../services/dataService/data.service';
import { MatSnackBar } from '@angular/material'
import { DialogData } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-edit-labels',
  templateUrl: './edit-labels.component.html',
  styleUrls: ['./edit-labels.component.scss']
})
export class EditLabelsComponent implements OnInit {
  message: any;
  constructor(public dialogRef: MatDialogRef<EditLabelsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private noteService: NotesService,
    private dataService: DataService, private bar: MatSnackBar) {
    console.log(" data in update", data);
    this.allLabel = data.allLabel
    this.changeText = false;
  }
  allLabel = []
  @Output() labeladd=new EventEmitter<any>();
  ngOnInit() {
    // this.dataService.currentMessage.subscribe(message =>{
    //   this.allLabel=message
    // })
   
  }
  addLabel(lab) {
    try {
      if(lab==undefined){
        console.log(" empty");
        
        return;
      }else{
      console.log(" card ", lab);
      let data = {
       
        label: lab,
        isDeleted: false,
        userId: localStorage.getItem('userId')

      }
      this.noteService.addLabel(data).subscribe(response => {
        console.log(response, " succsesfully updated note ");
        this.bar.open(" note update succesFully ", '', { duration: 2000 });
        this.labeladd.emit({});
      }, error => {
        console.log('error ', error);
      })
    }
      this.dialogRef.close();
    } catch (error) {
      console.log(error);

    }
  }

  deleteLabel(deleteLabel) {
    try {
      console.log(deleteLabel, "data in edit delete label");
      console.log("label id", deleteLabel.id);

      let data = {

        label: deleteLabel
      }
      this.noteService.deletelabel(data).subscribe(response => {
        console.log(" label deleted successfully ", response);
        this.bar.open("label deleted sucessfully");
      }, error => {
        console.log('error ', error);
      })
    } catch (error) {
      console.log('error ', error);
    }

  }
  editLabel(lab) {
    let data = {
      id: lab.id,
      label: lab.label,
      userId:localStorage.getItem('userId')
    }
    this.noteService.updateLabel(data).subscribe(response => {
      console.log("rsponse", response);

    })
  }

  changeText: boolean = true;

}
