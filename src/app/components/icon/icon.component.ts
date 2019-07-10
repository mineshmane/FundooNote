import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
import { MatSnackBar } from '@angular/material'
import { DataService } from '../../services/dataService/data.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  allLabel = []
  constructor(private notesService: NotesService, private snackBar: MatSnackBar, private dataService: DataService) { }
  @Input() card;
  @Input() isTrash;
  archive = true
  isDeleted = true
  //isDeleted=this.card.isDeleted;

  public colorArray: any = [
    [{ color: '#00FFFF' },
    { color: '#7FFFD4' },
    { color: '#F0E68C' },
    { color: '#2E8B57' }],
    [{ color: '#FFFF00' },
    { color: '#ADFF2F' },
    { color: '#00FF7F' },
    { color: '#FFDEAD' }],
    [{ color: '#8A2BE2' },
    { color: '#663399' },
    { color: '#00BFFF' },
    { color: '#0000FF' }]
  ]


  @Output() update = new EventEmitter<any>();
  @Output() labelToNote = new EventEmitter<any>();


  ngOnInit() {

    // console.log("card in icon",this.card);
    this.dataService.currentMessage.subscribe(message => {
      // console.log("data in icon", message);

      this.allLabel = message;
      // console.log(" all labelin icon",this.allLabel);

      // console.log("searched cards", this.card);

    })
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

  trashNote() {
    try {
      let data = {
        // cardidList:this.cardId,
        noteIdList: [this.card.id],
        isDeleted: this.archive,
      }
      console.log(data);
      this.notesService.deleteNote(data).subscribe(response => {
        console.log('response ', response);
        // this.update.emit({})
        this.snackBar.open('note deleted succesfully', '', { duration: 2000 });
      }, error => {
        console.log('error ', error);
      })
    } catch (error) {
      console.log(error);

    }

  }

  deleteForeverNote() {
    try {
      let data = {
        // cardidList:this.cardId,
        noteIdList: [this.card.id],
        isDeleted: false,
      }
      console.log(data);
      this.notesService.deleteForeverNote(data).subscribe(response => {
        console.log('response ', response);
        this.update.emit({});
        this.snackBar.open('note deleted forever succesfully', '', { duration: 2000 });
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


  addNoteLabel(label) {
    console.log(" note label called", label.id);
    console.log(" card", this.card.id);

    let data = {
      noteId: [this.card.id],

      lableId: label.id
    }
    console.log("data in data ", data);

    this.notesService.addLabelToNote(data).subscribe(response => {
      console.log(" response", response);
      this.labelToNote.emit({});
      this.snackBar.open('label added succesfully', '', { duration: 2000 });
    }, error => {
      console.log(error);

    })

  }

}
