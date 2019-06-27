import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notes=[];
  constructor(private userService:UserService) { }

  ngOnInit() {


    this.userService.getArchiveNotesList().subscribe(response => {
      console.log('response ', response['data'].data);
      this.notes = response['data'].data
      this.notes.reverse();
    }, error => {
      console.log('error ', error);

    })
  }

}
