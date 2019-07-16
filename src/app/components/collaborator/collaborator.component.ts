import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { NotesService } from '../../services/notes-service/notes.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../dashboard/dashboard.component';
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
  collaborators = []
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private userService: UserService,
    private snackbar: MatSnackBar,
    private noteService: NotesService) {

    console.log(this.data);

  }
  private img;

  firstName = localStorage.getItem("FirstName");
  lastName = localStorage.getItem("LastName");
  email = localStorage.getItem("email");
  imageUrl = localStorage.getItem("imageUrl");
  ngOnInit() {
    this.firstName = localStorage.getItem("firstName");
    this.lastName = localStorage.getItem("lastName");
    this.imageUrl = localStorage.getItem("imageUrl");
    this.img = environment.baseUrl + this.imageUrl;
    console.log(" image ", this.img);

  }




  // clearbutton() {
  //   this.collab.firstName == null;
  //   this.collab.lastName == null;
  //   this.collab.email == null;
  // }
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
  // selectUser(userAdded) {
  //   console.log("selected user is ", userAdded);

  //   this.collaborators.push(userAdded)
  //   console.log(" after added user in array", this.userAddedArray);

  // }
  cancel() {
    this.dialogRef.close();
  }

  addCollaborator(collaborator) {

    this.collaborators.push(collaborator)
    let obj = {
      "firstName": "Nagendra", "lastName": "Singh", "email": "nagendra.singh@bridgelabz.com", "userId": "5bb59e84773a0200408d87f8"
    }

    let data1 = {
      firstName: collaborator.firstName,
      lastName: collaborator.lastName,
      email: collaborator.email,
      userId: collaborator.userId
    }

    this.noteService.addCollaborator(data1, this.data).pipe(takeUntil(this.destroy$)).subscribe(response => {
      console.log(" response", response);
      this.snackbar.open('Added collaborator sucessfully......!', 'Done...!', { duration: 3000 });
      // this.clearbutton();
    }, error => {
      console.log(error);
      this.snackbar.open('Add collaboratoe unsucessful......!', 'Done...!', { duration: 3000 });

    })
  }



  removeCol(item) {
    console.log("Note iddddd", this.data);
    console.log("id remove data============>", item.id);
    console.log("this.data.UserId================>", item.userId);
    this.noteService.removeColaborator(this.data, item.userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.snackbar.open('Removing collaboratoe sucessfully......!', 'Done...!', { duration: 3000 });
      }, (error) => {
        this.snackbar.open('Removing collaboratoe unsucessful......!', 'Done...!', { duration: 3000 });
      });
  }

}
























