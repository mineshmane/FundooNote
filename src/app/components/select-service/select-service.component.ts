/************************************************************************************************
*  Execution       : 1. default node         cmd> select.service.ts 
*        
*  Purpose         :this component is for select product to add cart
* 
*  @file           : select.service.ts 
*  @module         : select.service.ts  - This is optional if expeclictly its an npm or local package
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 28-2-2019
*
*************************************************************************************************/

import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../model/register';
import { NotesService } from '../../services/notes-service/notes.service';
import { MatDialog } from '@angular/material'
import { Router } from '@angular/router';
import { DialogCartComponent } from '../dialog-cart/dialog-cart.component';
@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss']
})
export class SelectServiceComponent implements OnInit {

  @Input() data;
  constructor(public dialog: MatDialog, private noteService: NotesService, public router: Router) { }
  id = localStorage.getItem('Id');
  ngOnInit() {
    if (this.id != null) {
      this.router.navigateByUrl('/addnote');
    }
    this.getService();
  }
  openDialogAdvance(data): void {
    console.log("data", data);

    localStorage.setItem('serviceId', data.id)
    const dialogRef = this.dialog.open(DialogCartComponent, {
      // width: '850px',
      // height: '300px',
      panelClass: 'updateDialog',
      data: {
        data: data,
      }
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        console.log('The dialog was closed');

      });
  }
  services: Service[] = [];
  // destroy$: Subject<boolean> = new Subject<boolean>();
  getService() {
    this.noteService.getService().subscribe((response) => {
      this.services = response["data"].data;
      console.log("get addcart details note ===============>", this.services);
    }, (error) => {
      console.log(" error ", error);

    });
  }
  productCarts() {

  }

  signIn() {
    this.router.navigate(['login']);
  }

}
