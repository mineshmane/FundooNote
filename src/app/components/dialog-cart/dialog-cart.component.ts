/************************************************************************************************
*  Execution       : 1. default node         cmd> dialog-cart.ts 
*        
*  Purpose         :this component is for open dialog for selection and showing fetures of product
* 
*  @file           : dialog-cart.ts 
*  @module         : dialog-cart.ts  - This is optional if expeclictly its an npm or local package
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 28-2-2019
*
*************************************************************************************************/

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
  id;
  name: any;

  constructor(public dialogRef: MatDialogRef<DialogCartComponent>, private noteService: NotesService, private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, ) {
    console.log(" data in dialog cart ", data);

    this.serviceData = data['data']
    console.log(" after assign ", this.serviceData.id);
    this.name = this.serviceData.name
    



  }

  ngOnInit() {
    this.getDetails();
  }


  /**
    * @description: this method is for getting service details
    *                component
    * @param      : 
    */

  getDetails() {
    let body = {
      productId: this.serviceData.id
    }
    console.log(" data in body", body);

    this.noteService.productCarts(body).subscribe(response => {
      console.log(" responsse from backend", response);
      this.service = response["data"].details;
      console.log(" this. service details ", this.service);
      this.productId = this.service['id']
      localStorage.setItem("cartId", this.productId);
    }, error => {
      console.log(error);

    })
  }

  /**
    * @description: this method is for next step towords place order after reading fetures of product
    *                component route to resgoiter component after selecting product
    * @param      : notes Array
    */
  proceedto() {
    this.dialogRef.close();
    localStorage.setItem('serviceId', this.serviceData.id)
    console.log(" this .serviceData", this.serviceData.id);

    localStorage.setItem("cartId", this.productId);
    this.router.navigateByUrl('register', this.productId);
  }

  /**
    * @description: this method is for removing product from cart 
    *                component
    * @param      : notes Array
    */
  Remove() {
    this.dialogRef.close();
    localStorage.removeItem("cartId");
    localStorage.removeItem('serviceId')
    this.router.navigateByUrl('product');
  }
}
