import { Component, OnInit ,Inject } from '@angular/core';
import { notes } from 'src/app/model/notes';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../../services/userService/user.service';
import { MatSnackBar } from '@angular/material'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: notes,private userService:UserService,private bar:MatSnackBar) {
      console.log(" data in update",data);
      
     }

  
  ngOnInit() {
  
    
  }

  updateNote(card) {
    console.log(" card ",card);
    let data = {
      // cardidList:this.cardId,
      noteId: card.id,
      title: card.title,
      description:card.description

    }
    this.userService.updateNote(data).subscribe(response => {
      console.log(response, " succsesfully updated note ");
      this.bar.open(" note update succesFully ", '', { duration: 2000 });
    })

    this.dialogRef.close();
  }
}
