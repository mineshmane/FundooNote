import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
import { MatSnackBar } from '@angular/material'
import { DataService } from '../../services/dataService/data.service';
import { FormControl } from '@angular/forms';
import { getLocaleTimeFormat } from '@angular/common';

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
  @Input() isTakeNote;
  archive = true
  isDeleted = true
  //date=new Date();
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
  @Output() reminderToNote = new EventEmitter<any>();

  ngOnInit() {
    this.shareLabelArrayData()

  }
  shareLabelArrayData() {
    this.dataService.currentData.subscribe(message => {
      console.log("data in icon", message);
      if (message.type == 'label')
        this.allLabel = message.data;
      else if (message.type == 'search') {

      }
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

  unTrashNote() {
    try {
      let data = {
        // cardidList:this.cardId,
        noteIdList: [this.card.id],
        isDeleted: false,
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


  addLabelToLabel(label) {
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

  newDate;

  setReminder(dateTime) {

    console.log(" new date", dateTime);
    var datum = Date.parse(dateTime);
    console.log("new date after parseing", datum / 1000);


    this.todayDate = {
      reminder: [dateTime],

      isPined: false,
      isArchived: false,
      isDeleted: false,
      noteIdList: [this.card.id],
      userId: localStorage.getItem('userId')

    };

    console.log(" todya date", this.todayDate);
    this.notesService.setReminder(this.todayDate).subscribe(response => {
      console.log(" response from setReminder", response);
      this.reminderToNote.emit({});

    }, error => {
      console.log(error);

    })



  }
  date;
  todayDate;
  today() {
    this.date = new Date();
    this.date.setHours(20, 0, 0)
    console.log("dateprinting ", this.date)
    this.todayDate = {
      reminder: [this.date],

      isPined: false,
      isArchived: false,
      isDeleted: false,
      noteIdList: [this.card.id],
      userId: localStorage.getItem('userId')

    };
    console.log(" todya date", this.todayDate);
    this.notesService.setReminder(this.todayDate).subscribe(response => {
      console.log(" response from setReminder", response);
      this.reminderToNote.emit({});

    }, error => {
      console.log(error);

    })
    // return console.log("today date and time printing ", new Date(2018, 1, 12, 20, 0));
  }
}
