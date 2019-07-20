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
import { MatDialog } from '@angular/material/dialog';
import { EditLabelsComponent } from '../edit-labels/edit-labels.component'
import { NotesService } from '../../services/notes-service/notes.service';
import { DataService } from '../../services/dataService/data.service'
import { UserService } from '../../services/userService/user.service'
// import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { SetProfilePhotoComponent } from '../set-profile-photo/set-profile-photo.component';


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
  url = '';
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
  constructor(private userService: UserService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: Router, private dataService: DataService,
    public dialog: MatDialog, private noteService: NotesService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  allLabel = []
  message: string;
  imageurl: string
  localstorage_image: any

  isList: any;
  fName;
  lName;
  email;
  userName;
  // list: boolean = true;
  // grid: boolean = false;
  list: any
  grid: any

  view: any;
  ngOnInit() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.getLabelList();

    this.list = localStorage.getItem('isListView')
    this.grid = localStorage.getItem('gridView')

    this.dataService.labelEmmitedData.subscribe(response => {
      this.getLabelList();
    })

    // this.changeProfilePic();
    this.fName = localStorage.getItem('firstName')
    this.lName = localStorage.getItem('lastName')
    this.email = localStorage.getItem('email')
    this.userName = this.fName + this.lName
    localStorage.setItem('username', this.userName)

    this.dataService.profilePicData.subscribe(data => {
      console.log(" data from set profile in dash", data);
        this.changeProfilePic()

    })

    

    // this.dataService.labelEmmitedData.subscribe(message => {
    //   console.log(" message from label list",message);

    //   this.getLabelList();
    // })

  }

  refresh() {

    this.route.navigate(['dashboard/notes']);
  }

  /**
 * @description :  Grid and List View
 */
  View() {
    if (this.list == true) {
     // this.grid = true;
      this.list = false;
    } else  {
      this.list = true;
     // this.grid = false;
    }
    this.isList = this.list;
    localStorage.setItem('isListView', this.isList);
    // localStorage.setItem('gridView', this.grid)
    this.dataService.listViewData({
      data: this.isList
    });
  }

  /**
  * @description :  open dialogBox for Add and Edit Label 
  */
  openDialogLabel(): void {
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


  /**
 * @description : it call when profile pic change  
 */
  changeProfilePic() {
    this.localstorage_image = localStorage.getItem('imageUrl');
    this.imageurl = 'http://34.213.106.173/' + this.localstorage_image;
  }
  /**
 * @description :  open dialogBox for Setprofile photo component
 */
  openSetProfileDialog(): void {
    try {
      const dialogRef = this.dialog.open(SetProfilePhotoComponent, {
        // width: '250px',
        // height:'500px',
        data: {}
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



  /**
 * @description :  search note method for returning searching notes using keyUp event
 */
  search(event: any) {
    console.log("message in ts  dash ");
    this.route.navigate(['dashboard/search']);

    this.values = event.target.value;
    this.dataService.changeMessage({
      type: 'search',
      data: this.values
    })
    this.ab = this.values;

  }


  /**
 * @description : this method is for getting AllLabel list from database
 */
  getLabelList() {
    try {
      this.noteService.getLableList().subscribe(response => {
        console.log('response labels ', response);
        console.log(" response label 2", response['data'].details);

        this.allLabel = response['data'].details

        this.dataService.changeData({
          type: 'label',
          data: response['data'].details
        })
        this.allLabel.reverse();
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


  //  .pipe(takeUntil(this.destroy$))



  /**
 * @description : this method used for searching note by Label name when user click on label returns note list
 */

  openLabel(label) {
    console.log(" label ts", label);

    this.route.navigate(['dashboard/noteBylabel/' + label.label]);

  }

  logout() {
    console.log(" logout called");
    this.userService.logoutUser();
    localStorage.clear();
    this.route.navigate(['login']);
    //localStorage.removeItem('');
  }


}
