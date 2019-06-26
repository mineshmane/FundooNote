import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { notes } from 'src/app/model/notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private userService: UserService) { 

  }
notes=[]
  ngOnInit() {

    this.userService.getNotes().subscribe(response => {
      console.log('response ', response['data'].data);
      this.notes = response['data'].data
      this.notes.reverse();
    }, error => {
      console.log('error ', error);

    })


  }

  parentMessage = "message from parent"


}

