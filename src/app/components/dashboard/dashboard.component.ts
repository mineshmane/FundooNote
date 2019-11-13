/************************************************************************************************
*  Execution       : 1. default node         cmd> dashboard.ts 
*        
*  Purpose         :this component is for dashboard component toolbar and naav bar
* 
*  @file           : dashboard.ts 
*  @module         : dashboard.ts  - This is optional if expeclictly its an npm or local package
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 28-2-2019
*
*************************************************************************************************/

import { Component, OnInit, Input } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditLabelsComponent } from '../edit-labels/edit-labels.component'
import { NotesService } from '../../services/notes-service/notes.service';
import { DataService } from '../../services/dataService/data.service'
import { UserService } from '../../services/userService/user.service'
import { environment } from '../../../environments/environment'
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
  title;
  @Input() childMessage;
  @Input()
  fillerNav = Array.from({ length: 1 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({ length: 50 }, () =>
    ``);

  isOpen = true;
  //hide = true;
  click() {
    console.log(" is open ca;lled");

    this.isOpen = true;
  }

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
  searchInput = false;
  searchIn;
  isList: any;
  fName;
  lName;
  gridView = (localStorage.getItem('gridView') == 'true');

  email;
  userName;
  object = {
    view: this.gridView,

  }
  // list: boolean = true;
  // grid: boolean = false;
  list: any
  grid: any

  view: any;
  ngOnInit() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.getLabelList();
    this.changeProfilePic();
    // this.list = localStorage.getItem('isListView')
    this.grid = localStorage.getItem('gridView')

    this.dataService.labelEmmitedData.subscribe(response => {
      this.getLabelList();
    })

    this.changeProfilePic();
    this.fName = localStorage.getItem('firstName')
    this.lName = localStorage.getItem('lastName')
    this.email = localStorage.getItem('email')
    this.userName = this.fName + this.lName
    localStorage.setItem('username', this.userName)

    this.dataService.profilePicData.subscribe(data => {
      // console.log(" data from set profile in dash", data);
      this.changeProfilePic()

    })
  }


  /**
     * @description this method is for view change  and send view value to data service 
     * @returns nothing
     */
  gridUnGrid() {
    try {
      console.log("grid called inj ndashboard ");

      this.gridView = !this.gridView;
      // this.sidenavClass.sidenav1 = this.gridView;
      // this.sidenavClass.sidenav2 = !this.gridView;
      this.object.view = this.gridView;
      console.log(" object passsed in data serbvice ", this.object);

      this.dataToService(this.object);
    } catch (error) {
      console.log('error in gridUnGrid in toolbar');
    }
  }


  /**
* @description : it call when profile pic change  
*/
  changeProfilePic() {
    this.localstorage_image = localStorage.getItem('imageUrl');
    console.log(" imAGE IN DASH BORD ", this.localstorage_image);

    this.imageurl = environment.imagebaseUrl + this.localstorage_image
    console.log(" calling change pictures", this.imageurl);

  }

  // refresh() {

  //   this.route.navigate(['dashboard/notes']);
  // }
  refresh(): void {
    window.location.reload();
  }

  searchVisible() {
    console.log(" visible", this.searchInput);

    this.searchIn = !this.searchInput
    console.log(" after click ", this.searchIn);

  }

  /**
 * @description this method is for open shopping cart component
 * @returns nothing
 */
  shoppingCartOpen() {
    this.route.navigate(['dashboard/cart'])
  }
  /**
 * @description :  Grid and List View
 */
  View() {
    // this.list = localStorage.getItem('isListView');
    if (this.list == true) {
      this.grid = true;
      this.list = false;
      localStorage.setItem('isListView', this.isList);
    } else {
      this.list = true;
      this.grid = false;
      localStorage.setItem('isListView', this.isList);
    }
    this.isList = this.list;
    localStorage.setItem('isListView', this.isList);
    // localStorage.setItem('gridView', this.grid)
    this.dataService.listViewData({
      data: this.isList
    });
  }

  /**
* @description this method is for sending data to data service
* @param object
* @returns nothing
*/
  dataToService(object) {
    console.log(" data in data service method in dash boiard", object);

    try {
      this.dataService.listViewData(object)
    } catch (error) {
      console.log('error in   in toolbar');

    }
  }
  /**
  * @description :  open dialogBox for Add and Edit Label 
  */
  openDialogLabel(): void {
    try {
      const dialogRef = this.dialog.open(EditLabelsComponent, {
        // width: '250px',
        // height:'500px',
        panelClass: 'updateLabel',
        data: { allLabel: this.allLabel }
      });
      // console.log(" in card ",card);
      dialogRef.afterClosed().subscribe(result => {
        // console.log('The dialog was closed');
        //this.title = result;
      });
    } catch (error) {
      console.log(error);

    }

  }



  /**
 * @description :  open dialogBox for Setprofile photo component
 */
  openSetProfileDialog(): void {
    try {
      const dialogRef = this.dialog.open(SetProfilePhotoComponent, {

        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {

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
        this.allLabel = response['data'].details

        this.dataService.changeData({
          type: 'label',
          data: response['data'].details
        })
        this.allLabel.reverse();

      }, error => {
        console.log(" error is ", error);

      })

    } catch (error) {
      console.log(error);

    }


  }






  /**
 * @description : this method used for searching note by Label name when user click on label returns note list
 */

  openLabel(label) {
    console.log(" label ts", label);

    this.route.navigate(['dashboard/noteBylabel/' + label.label]);

  }



  /**
    * @description: this method is for logout the account it will clear the all local storage
    *                component
    * @param      : no param
    */
  logout() {
    console.log(" logout called");
    this.userService.logoutUser();
    localStorage.clear();
    this.route.navigate(['login']);
    //localStorage.removeItem('');
  }


}
