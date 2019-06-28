import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/userService/user.service'
import { MatSnackBar } from '@angular/material'
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  archive = true
  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  @Input() card;


  archiveNote() {
    let data = {
      // cardidList:this.cardId,
      noteIdList: [this.card.id],
      isArchived: this.archive,
    }
    console.log(data);
    this.userService.archiveNote(data).subscribe(response => {
      console.log('response ', response);
      this.snackBar.open('note archive succesfully', '', { duration: 2000 });
    }, error => {
      console.log('error ', error);
    })
  }

  deleteNote() {
    let data = {
      // cardidList:this.cardId,
      noteIdList: [this.card.id],
      isDeleted: this.archive,
    }
    console.log(data);
    this.userService.deleteNote(data).subscribe(response => {
      console.log('response ', response);
      this.snackBar.open('note deleted succesfully', '', { duration: 2000 });
    }, error => {
      console.log('error ', error);
    })
  }

  setColor(color, card) {
    console.log(" color data", card);
    card.color = color;
    let data = {
      color: color,
      noteIdList: [this.card.id],
    }

    this.userService.setColor(data).subscribe(response => {
      console.log('response ', response);
      this.snackBar.open('color changed succesfully', '', { duration: 2000 });
    }, error => {
      console.log('error ', error);
    })
  }

}
