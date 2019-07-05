/******************************************************************************
 *  Execution       :cmd> node ng s                  
 *  @description    :dashboard whre some basic fumnctionality are implemented
 *  @file           :dashboard.ts
 *  @author         :Minesh Mane <mineshmane94@gmail.com>
 *  @version        :1.0
 
 ******************************************************************************/


import { Component, OnInit, Input } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditLabelsComponent } from '../edit-labels/edit-labels.component'
import { NotesService } from '../../services/notes-service/notes.service';
import { DataService } from '../../services/dataService/data.service'
// import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

export interface DialogData {
  allLabel: []
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;

  "label": "string"
  "isDeleted": true
  values = '';
  ab = '';

  @Input() childMessage;
  @Input() 
  fillerNav = Array.from({ length: 1 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({ length: 50 }, () =>
    ``);

  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: Router, private dataService: DataService, public dialog: MatDialog, private noteService: NotesService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  allLabel = []
  message: string;
  ngOnInit() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.getLabelList();
    // this.data.currentMessage.subscribe(message => this.message = message)
   
  }

  // newMessage() {

  // }

  openDialog(): void {
    try {
      const dialogRef = this.dialog.open(EditLabelsComponent, {
        // width: '250px',
        // height:'500px',
        data: { allLabel: this.allLabel }
      });
      // console.log(" in card ",card);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        //this.title = result;
      });
    } catch (error) {
      console.log(error);

    }

  }

  search(event: any) {
    console.log("message in ts  dash ");
    this.route.navigate(['dashboard/search']);

    this.values = event.target.value;
    this.dataService.changeMessage(this.values)
    this.ab = this.values;

  }
  getLabelList() {
    try {
      this.noteService.getLableList().subscribe(response => {
        console.log('response labels ', response);
        console.log(" response label 2", response['data'].details);

        this.allLabel = response['data'].details
        this.dataService.changeMessage(response['data'].details)
        // this.allLabel.reverse();
        //console.log(" alllabels",this.allLabel);
        //  this.data.changeMessage(response['data'].details)
        //this.data.changeMessage(this.allLabel)

      }, error => {
        console.log(" error is ", error);

      })

    } catch (error) {
      console.log(error);

    }

  }



  

}
