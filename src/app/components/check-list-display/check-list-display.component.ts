/************************************************************************************************
*  Execution       : 1. default node         cmd> check-list.display.ts 
*        
*  Purpose         :this component is for check list add and remove
* 
*  @file           : check-list.display.ts 
*  @module         : check-list.display.ts  - This is optional if expeclictly its an npm or local package
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 28-2-2019
*
*************************************************************************************************/


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { updateCheckList } from "../../model/notes";
import { NotesService } from "../../services/notes-service/notes.service";
@Component({
  selector: 'app-check-list-display',
  templateUrl: './check-list-display.component.html',
  styleUrls: ['./check-list-display.component.scss']
})
export class CheckListDisplayComponent implements OnInit {
  public updateCheckListModel: updateCheckList;
  constructor(public noteService: NotesService) { }

  ngOnInit() {
  }
  tickBox = true;
  openCheckListArray = [];
  closeCheckListArray = [];
  @Output() checkListEvent = new EventEmitter<any>();
  @Input() cardId;
  @Input()
  public set tickBoxInput(v: any) {
    //  this.tickBox=v.
    if (v.item != undefined)
      if (v.item.id == this.cardId.id)
        this.tickBox = v.value;
    this.checkListClass.showCheckList = this.tickBox;
    this.checkListClass.hideCheckList = !this.tickBox;
  }

  @Input()
  public set noteCheckLists(v: any) {
    this.seprateCheckList(v);

  }

  public checkListClass = {
    "showCheckList": this.tickBox,
    "hideCheckList": !this.tickBox,

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
      console.log(this.closeCheckListArray);

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
 * @description this method is for seprate the checklist
 * @param array
 */
  seprateCheckList(array) {
    if (array == undefined) {
      return;
    }
    try {
      for (let index = 0; index < array.length; index++) {
        if (array[index].isDeleted == false)
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
 * @description this method is for emit an event and open dialogBox
 * 
 */
  openDialog() {
    this.checkListEvent.emit(this.cardId);
  }
}
