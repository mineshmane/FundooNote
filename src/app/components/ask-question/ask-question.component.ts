import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Editor, Reply } from '../../model/register';
import { notes } from '../../model/notes'
import { NotesService } from '../../services/notes-service/notes.service';
import { MatSnackBar } from '@angular/material';
import { DataService } from '../../services/dataService/data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {
  // destroy$: Subject<boolean> = new Subject<boolean>();
  showfroalaeditor: boolean = true;
  showfroalaeditor1: boolean = true;
  showfroalaeditor2: boolean = true;
  replyid;
  message = new FormControl('');
  notes: notes[] = [];
  noteDataList;
  parentId = '';
  ratings: number;
  rate: number;
  starList: boolean[] = [true, true, true, true, true];
  @Input() id;
  noteId: '';
  addMsg: Editor = new Editor();
  replyMsg: Reply = new Reply();
  like: boolean = true;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private noteService: NotesService,
    private snackbar: MatSnackBar,
    private dataService: DataService
  ) { }
  openEditor() {
    this.showfroalaeditor = !this.showfroalaeditor;
  }

  ngOnInit() {
    this.route.params

      .subscribe((params: Params) => {
        this.noteId = params['id'];
        console.log("this.noteId in ask question================>", this.noteId);
      })
    this.getNotesDetail();
  }
  /**
  * @description : add question on note
  */
  addMessage() {
    var body = {
      "message": this.addMsg.message,
      "notesId": this.noteId
    }
    console.log('add Message data============>', body);
    try {
      this.noteService.addMessageQA(body)

        .subscribe(
          data => {
            this.snackbar.open('Message added successfully.', '', { duration: 3000 });
            console.log('Add Message data..........', data);
            // this.getNotesDetail();
            this.dataService.getNotesDetail('');
          },
          error => {
            this.snackbar.open('Error while adding Message!', 'Error', { duration: 3000 });
            console.log("Error something wrong: ", error)
          });
    } catch (error) {
      this.snackbar.open('error', "", { duration: 3000 });
    }
    setTimeout(() => this.noteService.getNotesDetail(this.noteId), 10);
    this.addMsg.message = null;
    this.showfroalaeditor = !this.showfroalaeditor;

  }
  /**
  * @description : get all notes data
  */

  getNotesDetail() {
    this.noteService.getNotesDetail(this.noteId).subscribe(data => {
      console.log("this.noteId================>", this.noteId);
      this.notes = data["data"].data;
      console.log(" only notes array ", this.notes);

      console.log("this.notes[questionAndAnswerNotes]", this.notes[0].questionAndAnswerNotes);
      this.noteDataList = this.notes[0].questionAndAnswerNotes[0];
      // console.log("this.notes[questionAndAnswerNotes]0000000000000000", this.noteDataList.id);
      // this.parentId = this.noteDataList.id;
      console.log(" parent id ", this.parentId);

      // console.log("ParentId==============>", this.parentId);

      // console.log("this.notes=========>", this.notes);
      this.snackbar.open('Notes Detail.', '', { duration: 3000 });
      console.log('Notes Detail data..........', data);
    },
      error => {
        this.snackbar.open('Error while Notes Detail!', 'Error', { duration: 3000 });
        console.log("Error something wrong: ", error)
      });
  }
  /**
  * @description : send reply
  */
  postReplyEditor(id) {
    this.showfroalaeditor2 = !this.showfroalaeditor2;
    this.replyid = id

  }
  ReplyEditor() {
    this.showfroalaeditor1 = !this.showfroalaeditor1;
  }
  postReply(superid) {
    console.log(" reply parent id", superid);

    console.log("parentId================>", this.parentId);
    console.log(" reply called ");

    var body = {
      "message": this.replyMsg.message,

    }
    this.noteService.sendReply(body, superid).subscribe(data => {
      this.notes = data["data"].data;
      console.log("data in view Reply notelist ask question=========>", data["data"].data);
      this.snackbar.open('Notes Detail.', '', { duration: 3000 });
      console.log('Notes Detail data..........', data);
      this.getNotesDetail();
      this.dataService.getNotesDetail('');
    })
    this.showfroalaeditor2 = !this.showfroalaeditor2;
  }
  close() {
    this.router.navigate(['Takenotes']);
  }
  ngOnDestroy() {

  }
  /**
  * @description : add likes in question and answer
  */
  setLikes() {
    console.log("parentId in setLikes=====>", this.parentId);
    var body = {
      "like": this.like
    }
    try {
      this.noteService.addLikes(body, this.parentId).subscribe(data => {
        this.snackbar.open('like add successfully!', '', { duration: 3000 });
        console.log('like add successfully......!', data);
        this.getNotesDetail();
        this.dataService.getNotesDetail('');
      },
        error => {
          console.log("Error while like add ====> ", error)
        });
    } catch (error) {
      console.log("Error while like add ====> ", error)
    }
  }
  /**
  * @description : add rating in question and answer
  */
  setStar(data: any) {
    this.ratings = data + 1
    for (var i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starList[i] = false;

      }
      else {
        this.starList[i] = true;
      }
    }
    console.log('check parentId in rating ====>', this.parentId);
    var body = {
      "rate": this.ratings = data + 1
    }
    console.log('Rate Question ====>', body)
    try {
      this.noteService.addRating(body, this.parentId)

        .subscribe(
          data => {
            // for (var i = 0; i <= 4; i++) {
            //   if (i <= data) {
            //     this.starList[i] = false;

            //   }
            //   else {
            //     this.starList[i] = true;
            //   }
            // }
            this.snackbar.open('rate add successfully!', '', { duration: 3000 });
            console.log('Question Rating ====>', this.ratings);
            console.log('rate add successfully!', data);
            this.getNotesDetail();
            this.dataService.getNotesDetail('');
          },
          error => {
            console.log("Error while rate add ====> ", error)
          });
    } catch (error) {
      console.log("Error while rate add ====> ", error)
    }
  }

}
