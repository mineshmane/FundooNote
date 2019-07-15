import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from '../../services/notes-service/notes.service';
import { DataService } from '../../services/dataService/data.service'
import { UserService } from '../../services/userService/user.service'
import { MatSnackBar } from '@angular/material'
import { DialogData } from '../dashboard/dashboard.component';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-set-profile-photo',
  templateUrl: './set-profile-photo.component.html',
  styleUrls: ['./set-profile-photo.component.scss']
})
export class SetProfilePhotoComponent implements OnInit {
  @Output() profilePic = new EventEmitter<any>();
  value;
  fileToUpload: File
  imageChangedEvent: any = '';
  croppedImage: any = '';
  profilepic: File = null

  fileBeforeCropped: any;
  constructor(public dialogRef: MatDialogRef<SetProfilePhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private noteService: NotesService,
    private userService: UserService, private bar: MatSnackBar, private DataService: DataService) { }

  ngOnInit() {


  }



  getprofilephoto(event) {
    //console.log("data in event", event)
    this.imageChangedEvent = event;
    this.profilepic = <File>event.target.files[0];
   // console.log("profile pic", this.profilepic)
  }

  imageCropped(event: ImageCroppedEvent) {
   // console.log("exact file..", event.file);

    this.croppedImage = event;
    this.profilepic = <File>event.file;
  //  console.log("profile pic", this.profilepic)

  }

  setprofilephoto() {
    const imagefile = new FormData();
   
    imagefile.append('file', this.profilepic)
    if (this.profilepic == null) {
      return this.close();
    }
  //  console.log("profile pic", this.profilepic)

    this.userService.profilePic('user/uploadProfileImage', imagefile).subscribe(response => {
      localStorage.setItem('imageUrl', response['status']['imageUrl']);
    //  console.log("profile pic information...!", response)
      this.profilePic.emit(); this.close()
      this.DataService.setProfileData({
        data: {},
        type: 'profile'
      })
      this.bar.open("profile pic uploaded  Successfully..", "close", {
        duration: 3000,
      });

    })
  }


  close() {
    this.dialogRef.close();

  }
  cancel() {
    this.dialogRef.close();

  }

}
