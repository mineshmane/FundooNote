import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  notes=[];
  constructor(private userService:UserService) { }

  ngOnInit() {

    this.userService.getReminderNotesList().subscribe(response => {
      console.log('response ', response['data'].data);
      this.notes = response['data'].data
      this.notes.reverse();
    }, error => {
      console.log('error ', error);

    })
  }

}
