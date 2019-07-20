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
  collaborators = []
  destroy$: Subject<boolean> = new Subject<boolean>();
  @Input() card

  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, private dataService: DataService,
    private snackbar: MatSnackBar,
    private noteService: NotesService) {
    console.log(" dilog d data ", data);

    if (data) {
      console.log(" data undefined  called in  constructor");

      this.collaborators = data.card.collaborators
    }
    console.log(data);
    console.log(" collaboraArray", this.collaborators);



  }
  private img;
  imageurl: string
  localstorage_image: any

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
    this.changeProfilePic();

  }


  changeProfilePic() {
    this.localstorage_image = localStorage.getItem('imageUrl');
    this.imageurl = 'http://34.213.106.173/' + this.localstorage_image;
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

  addCollaborator(collaborator) {

    console.log(" data in ", this.data);


    if (collaborator == ' ' || collaborator == undefined) {
      return;
    } else {
      console.log(" else part called");


      this.collaborators.push(collaborator)
      var collaboratorObject = {
        firstName: collaborator.firstName,
        lastName: collaborator.lastName,
        email: collaborator.email,
        userId: collaborator.userId
      }


      if (this.data == null) {
        console.log(" undefinded collaborator called ", this.data);

        this.dataService.collaboratorDatasend({

          data:  [collaboratorObject] 
        })
        console.log(" object of collabo", collaboratorObject);

      } else{
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



  removeCol(item) {
    console.log("Note iddddd", this.data);
    console.log("id remove data============>", item.id);
    console.log("this.data.UserId================>", item.userId);
   // this.collaborators.splice(item)

    for (let i = 0; i <  this.collaborators.length; i++) {
      if ( this.collaborators[i] == item) {
        this.collaborators.splice(i, 1);
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























