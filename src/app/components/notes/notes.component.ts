import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
hide:true;
  constructor() { }

  ngOnInit() {
  }
  // public testCall(){
  //   alert("I am here..");    
  // }
}

