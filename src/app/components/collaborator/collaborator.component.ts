/************************************************************************************************
*  Execution       : 1. default node         cmd> collaborator.component.ts
*        
*  Purpose         :this component is for open dialog for add and delete collaborator 
* 
*  @file           : collaborator.component.ts
*  @module         : collaborator.component.ts - This is optional if expeclictly its an npm or local package
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 28-2-2019
*
*************************************************************************************************/


import { Component, OnInit, Inject, Input } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { NotesService } from '../../services/notes-service/notes.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../services/dataService/data.service'
import { Collaborator } from '../../model/register'
import { environment } from '../../../environments/environment'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  values: any;
  userArray = []
  collaboratorsArray = []
  destroy$: Subject<boolean> = new Subject<boolean>();
  @Input() card

  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, private dataService: DataService,
    private snackbar: MatSnackBar,
    private noteService: NotesService) {
    console.log(" dilog d data ", data);

    if (data.card != undefined) {
      console.log(" dilog d data ", data.card.user.firstName);
      console.log(" data undefined  called in  constructor");
      this.firstName = data.card.user.firstName;
      this.lastName = data.card.user.lastName;
      this.email = data.card.user.email;
      this.reminder = data.card.reminder
      console.log(" reminder ", this.reminder);

      this.imageUrl = data.card.user.imageUrl;
      this.collaboratorsArray = data.card.collaborators;
    }
    console.log(" collaboraArray", this.collaboratorsArray);



  }
  reminder;
  imgUrl;
  imageurl: string
  localstorage_image: any
  searchValue;
  user;
  firstName;
  lastName;
  email;
  imageUrl;

  ngOnInit() {


    this.imgUrl = environment.baseUrl + this.imageUrl;
    console.log(" image ", this.imgUrl);
    this.changeProfilePic();

  }


  changeProfilePic() {
    this.localstorage_image = localStorage.getItem('imageUrl');
    // this.imageurl = 'http://34.213.106.173/' + this.localstorage_image;
    this.imageurl = environment.imagebaseUrl + this.localstorage_image;
  }

  // clearbutton() {
  //   this.collab.firstName == null;
  //   this.collab.lastName == null;
  //   this.collab.email == null;
  // }
  search(event: any) {
    console.log("message in seARCH LIST ");


    this.values = event.target.value;
    this.searchList(this.values);

  }
  /**
    * @description: this method is for searching collborator from all users in database from all users
    *                component
    * @param      : data object
    */
  searchList(event: any) {
    this.values = event.target.value;
    let data = {
      "searchWord": this.values
    }
    this.userService.searchUserList(data).subscribe(response => {
      console.log(" response search list  :", response);
      this.userArray = response['data'].details

      console.log(" print array search list ", this.userArray);

    })
  }

  cancel() {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close();
  }


  /**
    * @description: this method is for add collaborator to note and calling api add collborator 
    *                component
    * @param      : collaborator 
    */
  addCollaborator(collaborator) {

    console.log(" data in ", this.data);


    if (collaborator == ' ' || collaborator == undefined) {
      return;
    } else {
      console.log(" else part called");


      this.collaboratorsArray.push(collaborator)
      var collaboratorObject = {
        firstName: collaborator.firstName,
        lastName: collaborator.lastName,
        email: collaborator.email,
        userId: collaborator.userId
      }


      if (this.data == null) {
        console.log(" undefinded collaborator called ", this.data);

        this.dataService.collaboratorDatasend({

          data: [collaboratorObject]
        })
        console.log(" object of collabo", collaboratorObject);

      } else {
        this.noteService.addCollaborator(collaboratorObject, this.data).pipe(takeUntil(this.destroy$)).subscribe(response => {
          console.log(" response", response);
          this.snackbar.open('Added collaborator sucessfully......!', 'Done...!', { duration: 3000 });
          this.dataService.collaboratorDatasend({

          })
          // this.clearbutton();
        }, error => {
          console.log(error);
          this.snackbar.open('Add collaboratoe unsucessful......!', 'Done...!', { duration: 3000 });

        })
      }

    }
  }



  /**
    * @description: this method is for remove collaborator from collaborator of note and calling api remove collaborator
    *                component
    * @param      : collaborator:object
    */

  removeCol(item) {
    console.log("Note iddddd", this.data);
    console.log("id remove data============>", item.id);
    console.log("this.data.UserId================>", item.userId);
    // this.collaborators.splice(item)

    for (let i = 0; i < this.collaboratorsArray.length; i++) {
      if (this.collaboratorsArray[i] == item) {
        this.collaboratorsArray.splice(i, 1);
      }
    }

    this.noteService.removeColaborator(this.data, item.userId).pipe(takeUntil(this.destroy$)).subscribe((response) => {

      this.dataService.collaboratorDatasend({

      })
      this.snackbar.open('Removing collaboratoe sucessfully......!', 'Done...!', { duration: 3000 });
    }, (error) => {
      this.snackbar.open('Removing collaboratoe unsucessful......!', 'Done...!', { duration: 3000 });
    });
  }

}
























