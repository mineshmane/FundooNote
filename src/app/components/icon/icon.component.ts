/************************************************************************************************
*  Execution       : 1. default node         cmd> icon.component.ts 
*        
*  Purpose         :this component is for icons all icons are in this component and operations 
*                  :of that component 
* 
*  @file           : icon.component.ts 
*  @module         : icon.component.ts - This is optional if expeclictly its an npm or local package
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 28-2-2019
*
*************************************************************************************************/



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
  dateTime;
  value;
  labelText;
  todayDate;
  tickBox = true;
  constructor(private notesService: NotesService,
    private dialog: MatDialog, private snackBar: MatSnackBar, private dataService: DataService,
    private route: Router) { }
  @Input() card;
  @Input() isTrash;
  @Input() isArchive;
  @Input() isTakeNote;
  isArchived = true
  isDeleted = true

  public colorArray: any = [
    // [{ color: '#00FFFF' },
    // { color: '#7FFFD4' },
    // { color: '#C0C0C0' },
    // { color: '#008080' }],

    // [{ color: '#FFFF00' },
    // { color: '#ADFF2F' },
    // { color: '#00FF7F' },
    // { color: '#FFDEAD' }],

    // [{ color: '#FFA07A' },
    // { color: '#F08080' },
    // { color: '#00BFFF' },
    // { color: '#808080' }]



    [{ color: '#E0FFFF' },
    { color: '#f28b82' },
    { color: '#fbbc04' },
    { color: '#E6E6FA' }],

    [{ color: '#ccff90' },
    { color: '#ADFF2F' },
    { color: '#cbf0f8' },
    { color: '#aecbfa' }],

    [{ color: '#d7aefb' },
    { color: '#fdcfe8' },
    { color: '#e6c9a8' },
    { color: '#FFDEAD' }]


  ]

@Output() labelCreated= new EventEmitter();
  @Output() update = new EventEmitter<any>();
  @Output() onChangeColor = new EventEmitter();
  @Output() onChangeReminder = new EventEmitter();
  @Output() onArchiveChange = new EventEmitter();
  @Output() onChangeLabel = new EventEmitter();
  @Output() labelToNote = new EventEmitter<any>();
  @Output() reminderToNote = new EventEmitter<any>();
  @Output() noteTrash = new EventEmitter();
  @Output() childObject = new EventEmitter();


  
  ngOnInit() {
    this.shareLabelArrayData()
    if (this.card) {
      this.isArchive = this.card.isArchived;
    }

  }


  /**
    * @description: this method is for navigate to askquestion component 
    *                component
    * @param      : note object with id
    */

  askquestion(card) {
    // console.log(" label ts", card);

    this.route.navigate(['dashboard/askquestions/' + card.id]);

  }

  /**
   * @description: this method is for method is for calling data service of label search  
   *                component
   * @param      : note object
   */
  shareLabelArrayData() {
    this.dataService.currentData.subscribe(message => {
      //  console.log("data in icon", message);
      if (message.type == 'label')
        this.allLabel = message.data;
      else if (message.type == 'search') {

      }
    })
  }

  changeTickBoxValue(item) {
    this.tickBox = !this.tickBox;
    let obj = {
      type: 'tickBox',
      value: this.tickBox,
      item: item
    }
    this.childObject.emit(obj);
  }


  /**
   * @description: this method is for Archive Note 
   *                component
   * @param      : note object
   */

  archiveNote() {
    try {
      let data = {
        // cardidList:this.cardId,
        noteIdList: [this.card.id],
        isArchived: this.isArchived,
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

  /**
   * @description: this method is for open collaborator dialogbox
   *                component
   * @param      : note object
   */

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




  /**
     * @description: this method is for unArchive note
     *                component
     * @param      : note object
     */

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



  /**
   * @description: this method is for restore note from Trash npotes
   *                component
   * @param      : note object
   */
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


  /**
   * @description: this method is for Move note In trash Note
   *                component
   * @param      : note object
   */
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

  /**
   * @description: this method is for delete note Forever
   *                component
   * @param      : note object
   */
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

  /**
     * @description: this method is for Change Color of cards
     *                component
     * @param      : note object
     */



  setColor(color, card) {
    console.log("card inset color ", card);
    console.log(" color is ", color);
    try {
      if (card == undefined) {

        this.onChangeColor.emit(color);
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


  createLabel(){

  }

   /**
  * @description: this method is for create new label 
  *                component
  * @param      : label name
  */

 addLabel(lab) {
  // this.allLabels.push(lab)
  try {

    if (lab == undefined) {
      console.log(" empty");
      // this.dialogRef.close();
      return;
    } else {

      console.log(" card ", lab);
      let data = {
        label: lab,
        isDeleted: false,
        userId: localStorage.getItem('userId')

      }
      this.notesService.addLabel(data).subscribe(response => {
        console.log(response, " succsesfully updated note ");
        // this.bar.open(" label added succesFully ", '', { duration: 2000 });
        this.labelCreated.emit({});
        this.labelText = '';
        this.dataService.labelDatasend({

        })

      }, error => {
        console.log('error ', error);
      })
    }

  } catch (error) {
    console.log(error);

  }
}
done() {
  // this.dialogRef.close();
}


  /**
   * @description: this method is for AddLabel to Note 
   *                component
   * @param      : note object and label id
   */

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

  /**
     * @description: this method is for setReminder To Notes using datePicker
     *                component
     * @param      : note object
     */

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


  /**
   * @description: this method is for  set reminder to card for today
   *                component
   * @param      : note object
   */
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


  /**
   * @description: this method is for setreminder for tomarrrow 
   *                component
   * @param      : note object
   */
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

  /**
   * @description: this method is for finding next MOnday date  
   *                component
   * @param      : note object
   */
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


  /**
   * @description: this method is for setReminder to Next monday only 
   *                component
   * @param      : note object
   */
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
