import { Component, OnInit ,Inject } from '@angular/core';
import { notes } from 'src/app/model/notes';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<UpdateComponent>,
   ) { }

  
  ngOnInit() {
  }


}
