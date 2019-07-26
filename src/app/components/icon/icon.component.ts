
/******************************************************************************
 *  Execution       :cmd> node ng s                  
 *  @description    :dashboard whre some basic fumnctionality are implemented
 *  @file           :dashboard.ts
 *  @author         :Minesh Mane <mineshmane94@gmail.com>
 *  @version        :1.0
 
 ******************************************************************************/



import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../services/notes-service/notes.service'
import { MatSnackBar } from '@angular/material'
import { DataService } from '../../services/dataService/data.service';
import { MatDialog } from '@angular/material/dialog'
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  allLabel = []
  date;
  todayDate;
  constructor(private notesService: NotesService,
    private dialog: MatDialog, private snackBar: MatSnackBar, private dataService: DataService,
    private route: Router) { }
  @Input() card;
  @Input() isTrash;
  @Input()isarchive;
  @Input() isTakeNote;
  isArchive = true
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
  @Output() onChangeColor = new EventEmitter();
  @Output() onChangeReminder = new EventEmitter();
  @Output() onArchiveChange = new EventEmitter();
  @Output() onChangeLabel = new EventEmitter();
  @Output() labelToNote = new EventEmitter<any>();
  @Output() reminderToNote = new EventEmitter<any>();
  @Output() noteTrash = new EventEmitter();

  ngOnInit() {
    this.shareLabelArrayData()
    if (this.card) {
      this.isArchive = this.card.isArchived;
    }

  }


  // askquestion(noteData) {
  //   this.route.navigateByUrl('askquestion' + '/' + this.card.id);
  //   //this.route.navigate(['icon/search']);
  // }

  askquestion(card) {
    console.log(" label ts", card);

    this.route.navigate(['dashboard/askquestion/' + card.id]);

  }

  shareLabelArrayData() {
    this.dataService.currentData.subscribe(message => {
      //  console.log("data in icon", message);
      if (message.type == 'label')
        this.allLabel = message.data;
      else if (message.type == 'search') {

      }
      // console.log(" all labelin icon",this.allLabel);

      // console.log("searched cards", this.card);

    })
  }
  Archive() {
    this.isArchive = !this.isArchive;
    // this.onChange.emit(this.isPin);
    // this.notePined.emit(this.isPin);
  }
  archiveNote() {
    try {
      let data = {
        // cardidList:this.cardId,
        noteIdList: [this.card.id],
        isArchived: this.isArchive,
      }
      console.log(data);
      this.notesService.archiveNote(data).subscribe(response => {
        console.log('response ', response);
        this.onArchiveChange.emit();
        this.snackBar.open('note archive succesfully', '', { duration: 2000 });
      }, error => {
        console.log('error ', error);
      })
    } catch (error) {
      console.log(error);

    }

  }


  openCollaboratorDialog(card): void {
    console.log(" log dia", card);


    try {


      if (typeof card === 'undefined') {
        console.log(" dilog undefinedwala");

        const dialogRef = this.dialog.open(CollaboratorComponent, {

          width: '600px',
          height: '275px',


        });
        // console.log(" in card ",card);
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          //this.title = result;
        });
      } else {
        const dialogRef = this.dialog.open(CollaboratorComponent, {
          // width: '600px',
          // height: '275px',


          data: { card }
        });
        // console.log(" in card ",card);
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          //this.title = result;
        });
      }
    } catch (error) {
      console.log(error);

    }

  }






  unArchiveNote() {
    try {
      let data = {
        // cardidList:this.cardId,
        noteIdList: [this.card.id],
        isArchived: false,
      }
      console.log(data);
      this.notesService.archiveNote(data).subscribe(response => {
        console.log('response ', response);
        this.onArchiveChange.emit();
        this.snackBar.open('note un archive succesfully', '', { duration: 2000 });
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
        isDeleted: this.isDeleted,
      }
      console.log(data);
      this.notesService.deleteNote(data).subscribe(response => {
        console.log('response ', response);
        this.noteTrash.emit({})
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
    console.log("card inset color ", card);
    console.log(" color is ", color);
    try {
      if (card == undefined) {

        this.onChangeColor.emit(color)
        console.log(" undefined cardf ", color);
        // this.dataService.colorDatasend({
        //   data
        // })

      }
      else {
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
      }
    } catch (error) {
      console.log(error);

    }
  }


  addLabelToNote(label, carditem) {
    if (carditem == undefined) {
      this.onChangeLabel.emit(label)
    } else {


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



  setReminder(dateTime, carditem) {

    if (dateTime == undefined) {

      return;
    } else {

      if (carditem == undefined) {
        this.onChangeReminder.emit(dateTime)
      } else {

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
    }

  }

  today(cardItem) {
    this.date = new Date();
    this.date.setHours(20, 0, 0)
    console.log("dateprinting ", this.date)
    if (cardItem == undefined) {
      this.onChangeReminder.emit(this.date)
    } else {


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
  tommorrow(cardItem) {
    var today = new Date();
    var tomorrow = new Date();
    var tomm = tomorrow.setDate(today.getDate() + 1);
    tomorrow.setHours(8, 0, 0)
    if (cardItem == undefined) {
      this.onChangeReminder.emit(tomorrow)
    } else {



      this.todayDate = {
        reminder: [tomorrow],

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

  }

  closestMonday = () => {
    var curr_date = new Date(); // current date
    var day_info = 8.64e+7; // milliseconds per day
    var days_to_monday = 8 - curr_date.getDay(); // days left to closest Monday
    var monday_in_sec = curr_date.getTime() + days_to_monday * day_info; // aleary Monday in seconds from 1970 
    var next_monday = new Date(monday_in_sec); // Monday in date object
    next_monday.setHours(8, 0, 0);
    console.log(" next monday ", next_monday);

    return next_monday;
  }

  nextWeekMonday(cardItem) {

    var monday = this.closestMonday()


    console.log(" newxt Monday ", monday);
    if (cardItem == undefined) {
      this.onChangeReminder.emit(monday)
    }
    else {


      this.todayDate = {
        reminder: [monday],

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
}
