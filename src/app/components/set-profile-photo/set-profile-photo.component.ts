import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from '../../services/notes-service/notes.service';
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
  url: any;
  value;
  file;


  imageChangedEvent: any = '';
  croppedImage: any = '';
  files: [];
  constructor(public dialogRef: MatDialogRef<SetProfilePhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private noteService: NotesService,
    private usrerService: UserService, private bar: MatSnackBar, ) { }

  ngOnInit() {


  }







  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log(" event", event);

    this.croppedImage = event.base64;

    this.value = event.file;
    console.log(" file upload ", this.value);

  }
  dataURItoBlob(dataURI): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  upload() {
 
    
    let formData = new FormData();
    // if ($('#fileinput')[0] != undefined) {
    //   if ($('#fileinput')[0].this.files.length > 0) {
    //     this.file = $('#fileinput')[0].this.files[0];
    //     formData.append('uploadingFile', this.file);
    //     //fp.fileName = file.name;
    //     console.log(formData);
    //   }
    formData.append('file', this.value,);
    console.log("form data on ",formData);

    this.usrerService.uploadProfileImage(formData).subscribe(response => {
      console.log(" response=", response);
      this.bar.open("profile image uploaded succesfully")


    }, error => {
      console.log(error);

    })
  }


  // public delete() {
  //   this.url = null;
  // }




  // onUpload() {
  //   const formData = new FormData();
  //   for (const file of this.files) {
  //       formData.append(name, file, );
  //   }
  //   //this.http.post('url', formData).subscribe(x => ....);
  // }
}
