import { Component, OnInit, Input, inject } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { MatSnackBar } from '@angular/material'
import { UpdateComponent } from '../update/update.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  pin = true

  title = '';
  description = '';
  constructor(
    private userService: UserService,
    private bar: MatSnackBar,
    public dialog: MatDialog) { }
  @Input() childMessage;
  //@Input() card;

  ngOnInit() {

  }

  pinNote(card) {
    console.log(" card ", card);
    let data = {
      // cardidList:this.cardId,
      noteIdList: [card.id],
      isPined: this.pin,
    }
    this.userService.pinNote(data).subscribe(response => {
      console.log(response, " succsesfully pined ");
      this.bar.open(" note pined succesFully ", '', { duration: 2000 });
    })
  }



  openDialog(card): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      //width: '250px',
      data: card
    });
    console.log(" in card ",card);
    

    dialogRef.afterClosed().subscribe(result => {
      
      console.log('The dialog was closed');
      this.title = result;
    });
  }
}
