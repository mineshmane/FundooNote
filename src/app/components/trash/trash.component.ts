import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notes=[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getTrashNotesList().subscribe(response =>{
    this.notes=response['data'].data
    console.log(" respoinsee data ",response['data'].data);
    this.notes.reverse();
    
    },error=>{
console.log("error",error);

    })
  }

}
