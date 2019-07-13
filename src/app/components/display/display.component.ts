import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
import { MatSnackBar } from '@angular/material'
import { UpdateComponent } from '../update/update.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  pin = true
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  title = '';
  description = '';
  constructor(
    private notesService: NotesService,
    private bar: MatSnackBar,
    public dialog: MatDialog) { }
  @Input() childMessage;
  @Input() isTrash;
  @Input() card
  @Output() update = new EventEmitter<any>();
  @Output() removeLabel = new EventEmitter<any>();
  @Output() labelToNote=new EventEmitter<any>();
  @Output() reminderToNote=new EventEmitter<any>()
  @Output() removeReminder = new EventEmitter<any>();
  ngOnInit() {

  }

  pinNote(card) {
    try {
      console.log(" card ", card);
      let data = {
        // cardidList:this.cardId,
        noteIdList: [card.id],
        isPined: this.pin,
      }
      this.notesService.pinNote(data).subscribe(response => {
        console.log(response, " succsesfully pined ");
        this.update.emit();
        this.bar.open(" note pined succesFully ", '', { duration: 2000 });
      }, error => {
        console.log('error ', error);
      })
    } catch (error) {
      console.log(error);

    }

  }

  removeNoteLabel(label, card): void {
    console.log(label.id, " labelin ");
    console.log("card in disp[lay", card.id);

    let data = {
      noteId: [card.id],

      lableId: label.id
    }
    console.log("data ", data);

    this.notesService.removeNoteLabel(data).subscribe(response => {
      console.log("response", response);
      this.removeLabel.emit();
      this.bar.open(" label removed succesFully ", '', { duration: 2000 });
    }, error => {
      console.log(error);

    })
  }

  removeNoteReminder(reminder,card){
    console.log(card, " labelin ");
    console.log("card in disp[lay", card);

    let data = {
      noteIdList: [card.id],
      userId: localStorage.getItem('userId')

      
    }
    console.log("data ", data);

    this.notesService.removeNoteReminder(data).subscribe(response => {
      console.log("response", response);
      this.removeReminder.emit();
      this.bar.open(" label removed succesFully ", '', { duration: 2000 });
    }, error => {
      console.log(error);

    })
  }


  openDialog(card): void {
    try {
      const dialogRef = this.dialog.open(UpdateComponent, {
        //width: '250px',
        data: card
      });
      console.log(" in card ", card);


      dialogRef.afterClosed().subscribe(result => {

        console.log('The dialog was closed');
        this.title = result;
      }, error => {
        console.log('error ', error);
      });
    } catch (error) {
      console.log(error);

    }

  }
  getTrashNotes() {
    this.update.emit();
  }
  labelAddedToNote(){
this.labelToNote.emit();
  }
  reminderAddedToNote(){
    this.reminderToNote.emit();
  }
}
