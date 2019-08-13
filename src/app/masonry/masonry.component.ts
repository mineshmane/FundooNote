/************************************************************************************************
*  Execution       : 1. default node         cmd> set-profile-photo.ts 
*        
*  Purpose         :this component is for open dialog for image crop
* 
*  @file           : set-profile-photo.ts
*  @module         : setprofile-photo.ts - This is optional if expeclictly its an npm or local package
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 28-2-2019
*
*************************************************************************************************/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.scss']
})
export class MasonryComponent implements OnInit {
  @Input() unPinedMessage;
  @Input() pinedMessage;
  constructor() {
    console.log(" unpined in masory ",this.unPinedMessage);
    
   }

  ngOnInit() {
  }
  masonryItems = [
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' },
    { title: 'item 4' },
    { title: 'item 5' },
    { title: 'item 6' }
  ];
}
