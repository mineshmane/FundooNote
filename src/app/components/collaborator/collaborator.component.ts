import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { NotesService } from '../../services/notes-service/notes.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  values: any;
  userArray = []
  userAddedArray = []

  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private userService: UserService, private noteService: NotesService) {

    console.log(this.data);

  }

  ngOnInit() {
  }


  addCollaborator(userData) {
    const data1 = {
      data: this.data,
      user: userData
    }
    console.log(" data about datas", data1);

    this.noteService.addCollaborator(data1).subscribe(response => {
      console.log(" response", response);

    },error=>{
      console.log(error);
      
    })
  }

  selectUser(userAdded) {
    console.log("selected user is ", userAdded);

    this.userAddedArray.push(userAdded)
    console.log(" after added user in array", this.userAddedArray);

  }

  search(event: any) {
    console.log("message in ts  dash ");
    // this.route.navigate(['dashboard/search']);

    this.values = event.target.value;
    this.searchList(this.values);

  }
  searchList(event: any) {
    this.values = event.target.value;
    let data = {
      "searchWord": this.values
    }
    this.userService.searchUserList(data).subscribe(response => {
      console.log(" response :", response);
      this.userArray = response['data'].details

      console.log(" print array", this.userArray);

    })
  }



}
