import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesService } from '../../services/notes-service/notes.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-dialog-cart',
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.scss']
})
export class DialogCartComponent implements OnInit {
  serviceData: any;
  service: any;
  productId;
  constructor(public dialogRef: MatDialogRef<DialogCartComponent>, private noteService: NotesService, private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, ) {
    console.log(" data in dialog cart ", data);

    this.serviceData = data['data']
    console.log(" after assign ", this.serviceData.id);

  }

  ngOnInit() {
    this.getDetails();
  }


  getDetails() {
    let body = {
      productId: this.serviceData.id
    }
    console.log(" data in body", body);

    this.noteService.productCarts(body).subscribe(response => {
      console.log(" responsse from backend", response);
      this.service = response["data"].details;
      console.log(" this. service details ", this.service);
      this.productId=this.service['id']
      localStorage.setItem("cartId", this.productId);
    }, error => {
      console.log(error);

    })
  }
  proceedto() {
    this.dialogRef.close();
    this.router.navigateByUrl('register');
  }
  Remove() {
    this.dialogRef.close();
    localStorage.removeItem("cartId");
    this.router.navigateByUrl('addcart');
  }
}
