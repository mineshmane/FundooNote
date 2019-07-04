import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
import { MatSnackBar } from '@angular/material'
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  
  constructor(private notesService: NotesService, private snackBar: MatSnackBar) { }
  @Input() card;
  @Input() isTrash;
  archive = true
  isDeleted=true
  //isDeleted=this.card.isDeleted;
  
 
  
  @Output() update = new EventEmitter<any>();

  ngOnInit() {
 
      console.log("card in icon",this.card);
  }
 
  archiveNote() {
    try {
      let data = {
        // cardidList:this.cardId,
        noteIdList: [this.card.id],
        isArchived: this.archive,
      }
      console.log(data);
      this.notesService.archiveNote(data).subscribe(response => {
        console.log('response ', response);

        this.snackBar.open('note archive succesfully', '', { duration: 2000 });
      }, error => {
        console.log('error ', error);
      })
    } catch (error) {
      console.log(error);

    }

  }

  deleteNote() {
    try {
      let data = {
        // cardidList:this.cardId,
        noteIdList: [this.card.id],
        isDeleted: this.archive,
      }
      console.log(data);
      this.notesService.deleteNote(data).subscribe(response => {
        console.log('response ', response);
        this.snackBar.open('note deleted succesfully', '', { duration: 2000 });
      }, error => {
        console.log('error ', error);
      })
    } catch (error) {
      console.log(error);

    }

  }
  

  setColor(color, card) {
    try {
      console.log(" color data", card);
      card.color = color;
      let data = {
        color: color,
        noteIdList: [this.card.id],
      }

      this.notesService.setColor(data).subscribe(response => {
        console.log('response ', response);
        this.update.emit({})
        this.snackBar.open('color changed succesfully', '', { duration: 2000 });
      }, error => {
        console.log('error ', error);
      })
    } catch (error) {
      console.log(error);

    }

  }

}
