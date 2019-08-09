import { Component, OnInit, Inject } from '@angular/core';
import { notes, addCheckList, updateCheckList, deleteCheckList } from 'src/app/model/notes';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from '../../services/notes-service/notes.service';

import { MatSnackBar } from '@angular/material'
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  labels = [];
  collaborators = [];
  pin;
  reminders = [];



  label = [];
  image:string;
  checked = true;
  tickBox=true;
  change = {
    colorChange: false,
    pinChange: false,
    isArchivedChange: false,
    reminderChange: false,
  }
  public checkListClass = {
    "showCheckList": this.tickBox,
    "hideCheckList": !this.tickBox,

  }
  bgcolor = '';
  rem = [];
  collaborator = [];
  openCheckListArray = [];
  closeCheckListArray = [];
  Type = '';
  labelsArray = [];
  list = false;
  // parentSubject: Subject<any> = new Subject();
  // title = new FormControl(this.data.title, [Validators.minLength(1)]);
  // description = new FormControl(this.data.description);
  checkListValue = new FormControl('');

  // // flag
  saveFlag = false;
  public noteModel: addCheckList;
  public updateCheckListModel: updateCheckList;
  public deleteCheckList: deleteCheckList;
  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private noteService: NotesService, private bar: MatSnackBar) {
    console.log(" data in update", data);
    this.collaborators = data.card.collaborators
    console.log(" this is collab in update", this.collaborators);

    this.labels = data.card.noteLabels
    console.log(" labels in update", this.labels);
    this.reminders = data.card.reminder
    console.log(" reminder in update", this.reminders);
this.pin=data.card.isPined;
console.log(" it is pined ",this.pin);




// this.bgcolor = data.color;
// this.pin = this.data.isPined;
// this.rem = this.data.reminder;
// this.labelsArray = this.data.noteLabels;
// this.Type = this.data.type;
// this.collaborator = this.data.collaborators;
// this.tickBox=this.data.checkBox;
// this.checkListClass.showCheckList=this.tickBox;
// this.checkListClass.hideCheckList=!this.tickBox;
// this.image=environment.url+data.imageUrl;
// this.seprateCheckList(this.data.noteCheckLists);

  }


  ngOnInit() {


  }

  updateNote(card) {
    try {
      console.log(" card in update ", card.card.id);
      let data = {
        noteId: card.card.id,
        title: card.card.title,
        description: card.card.description,
        // collaborators:card.card.collaborators
      }
      this.noteService.updateNote(data).subscribe(response => {
        console.log(response, " succsesfully updated note ");
        this.bar.open(" note update succesFully ", '', { duration: 2000 });
      }, error => {
        console.log(error);

      })

      this.dialogRef.close();
    } catch (error) {
      console.log(error);

    }

  }






   /**
  * @description this method is for when user click on add list then it will show the input automatically
  * @returns nothing
  */
 checkListAddStart() {
  try {
    this.list = true;
  } catch (error) {
    console.log('error in checklistAddStart method in note update');

  }
}

/**
* @description this method is for check the size of checklistvalue if it is greater then 1 then automatically it show
*               save icon
* @returns nothing
*/
check() {
  if (this.checkListValue.value.length > 0) {
    this.saveFlag = true;
  }
  else {
    this.saveFlag = false;
  }
}


/**
* @description this method is for save the checklist to the card
* @returns nothing
*/
saveChecklist(value) {
  try {

    this.noteModel = new addCheckList();
    this.noteModel.itemName = this.checkListValue.value;
    this.noteModel.status = value;
    this.noteModel.isDeleted = false;
    this.noteModel.notesId = this.data.id;
    if (value == 'open') {
      this.openCheckListArray.push(this.noteModel);
    } else {
      this.closeCheckListArray.push(this.noteModel);
    }
    this.addCheckListService(this.noteModel);
    this.checkListValue.reset();
    this.list = false;
    this.saveFlag = false;

  } catch (error) {

  }

}

/**
 * @description this method is for call add checklist service to card
 * @param object 
 */

addCheckListService(object) {
  try {
    this.noteService.addChecklist(object).subscribe(data => {
      console.log('data after add check list', data);

    }, err => {
      console.log('error after add checlist', err);

    })
  } catch (error) {
    console.log('error in addCheckListService', error);

  }

}
/**
* @description this method is for seprate the checklist
* @param array
*/
seprateCheckList(array) {
  console.log(array);

  try {
    for (let index = 0; index < array.length; index++) {
      if(array[index].isDeleted==false)
      if (array[index].status == 'open') {
        this.openCheckListArray.push(array[index]);
      } else {
        this.closeCheckListArray.push(array[index]);
      }

    }
  } catch (error) {
    console.log(error);

  }
}
/**
 * @description this method is for update the checklist
 * @param item
 * @param value
 */
updateChecklist(item, value) {
  // value is for adding checklist to array according to it 
  console.log(item, value);
  this.updateCheckListModel = new updateCheckList();
  this.updateCheckListModel.noteId = item.notesId;
  this.updateCheckListModel.checkListId = item.id;
  this.updateCheckListModel.itemName = item.itemName;
  this.updateCheckListModel.status = value;
  // it means we have to push item in close array
  if (value == 'close') {
    let ind = this.openCheckListArray.indexOf(item);
    this.openCheckListArray.splice(ind, 1);
    this.closeCheckListArray.push(item);
  } else {
    let ind = this.closeCheckListArray.indexOf(item);
    this.closeCheckListArray.splice(ind, 1);
    this.openCheckListArray.push(item);
  }
  this.updateCheckListService(this.updateCheckListModel);
}

/**
 * @description this method is for call service checklist update
 * @param body
 */
updateCheckListService(body) {
  try {
    this.noteService.updateChecklist(body).subscribe(data => {
      console.log('data after updateCheckList', data);

    }, err => {
      console.log('error in updateCheckListService', err);

    })
  } catch (error) {
    console.log('error in updateCheckListService', error);
  }

}
/**
   * @description this method is for delete the checklist
   * @param value
   * @param item
   */
removeCheckList(item, value) {
  console.log(item,value);
  
  try {
    this.deleteCheckList = new deleteCheckList();
    this.deleteCheckList.checkListId = item.id;
    this.deleteCheckList.noteId = item.notesId;
    if (value == 'open') {
      let ind = this.openCheckListArray.indexOf(item);
      this.openCheckListArray.splice(ind, 1);
    } else {
      let ind = this.closeCheckListArray.indexOf(item);
      console.log(ind);
      
      this.closeCheckListArray.splice(ind, 1);
    }

    this.removeCheckListService(this.deleteCheckList);

  } catch (error) {
    console.log('error in removeChecklist', error);

  }


}


removeCheckListService(body){
  try {
    this.noteService.removeChecklist(body).subscribe(data=>{
      console.log('data after remove checklist',data);
      
    },err=>{
      console.log('error after remove checklist',err);
      
    })
  } catch (error) {
    
  }

}
}
