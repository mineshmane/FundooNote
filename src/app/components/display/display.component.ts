import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { MatSnackBar } from '@angular/material'
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  pin = true
  constructor(private userService: UserService, private bar: MatSnackBar) { }
  @Input() childMessage;
  @Input() card;

  ngOnInit() {
   
  }
  
  pinNote() {



    let data = {
      // cardidList:this.cardId,
      noteIdList: [this.card.id],
      isDeleted: this.pin,
    }
    this.userService.pinNote(data).subscribe(response => {
      console.log(response, " succsesfully pined ");
      this.bar.open(" note pined succesFully ");
    })
  }
}
