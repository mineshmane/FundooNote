import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"
import { NotesService } from "../../services/notes-service/notes.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { MatSnackBar } from '@angular/material';
import { Question, reply } from "../../model/QAModel";
import { DataService } from '../../services/dataService/data.service';

@Component({
  selector: 'app-ask-questions',
  templateUrl: './ask-questions.component.html',
  styleUrls: ['./ask-questions.component.scss']
})
export class AskQuestionsComponent implements OnInit {
  public QuestionModel: Question;
  public replyModel: reply;
  constructor(public route: Router, public activeRoute: ActivatedRoute,
    public noteService: NotesService, private spinnerService: Ng4LoadingSpinnerService,
    private snackBar: MatSnackBar, private dataservice: DataService) { }

  cardToken = this.activeRoute.snapshot.params.cardId;
  title = '';
  description = '';
  card: any;
  editorContent: any;
  secondId = '';
  questions = ''
  AnswerArray = [];
  question: any;
  display = false;
  user: any;
  rate = 5;
  htmlField: any;
  parentId = ''
  sidnav = false;
  likeCount = 3;
  showId = '';
  // likeObject = { "userId": "5c67f5371524250040082dba", "like": true };
  likeObject = { "userId": "5ce7d52e4b57f70040e63766", "like": true };
  imgUrl = 'http://fundoonotes.incubation.bridgelabz.com/';
  // imgUrl = environment.imagebaseUrl;


  // localstorage_image = localStorage.getItem('imageUrl');
  // imageurl = 'http://fundoonotes.incubation.bridgelabz.com/' + this.localstorage_image;
  showFirstReply = false;
  showSecondReply = false;
  showSecondId = '';
  showEditorId = false;
  mainClass = {
    sideNavOpen: this.sidnav,
    sideNavClose: !this.sidnav
  }
  ngOnInit() {


    this.activeRoute.params.subscribe((params: Params) => {
      this.cardToken = params['id'];
      console.log("this.noteId in ask question================>", this.cardToken);
    })
    console.log(this.cardToken);
    this.getCardDetails();
    this.dataservice.sideNaveMessage.subscribe(data => {
      console.log('data in ask question', data);
      this.sidnav = data;
      this.mainClass.sideNavOpen = this.sidnav;
      this.mainClass.sideNavClose = !this.sidnav;

    }, err => {
      console.log('error in ask question', err);

    })

  }
  /**
 * @description this method is for get card detail by id
 * @returns nothing
 */
  getCardDetails() {
    console.log(this.question);

    this.spinnerService.show();
    try {
      this.noteService.getNotesDetail(this.cardToken).subscribe(data => {
        console.log('data ', data['data']['data']);
        this.card = data['data']['data'];
        this.title = this.card[0].title;
        this.user = this.card[0].user;
        this.description = this.card[0].description;
        this.question = this.card[0].questionAndAnswerNotes[0];
        console.log(this.question);

        this.AnswerArray = this.card[0].questionAndAnswerNotes;
        if (this.card[0].questionAndAnswerNotes[0] != undefined)
          this.parentId = this.card[0].questionAndAnswerNotes[0].id;
        this.AnswerArray.splice(0, 1);
        console.log(this.question);
        this.display = true;
        this.spinnerService.hide();
        console.log(this.AnswerArray);
        if (this.AnswerArray != null)
          for (let i = 0; i < this.AnswerArray.length; i++) {
            console.log(this.AnswerArray[i].id, 'Id and parent id', this.AnswerArray[i].parentId);
          }

      }, err => {
        console.log('error ', err);

      })
    } catch (error) {
      console.log('error in getCardDetails in askQuestion ', error);

    }

  }
  Askquestion() {
    if (this.editorContent == '') {
      return;
    }
    else {
      this.submit();
    }
  }

  /**
   * @description :when use ask the question and hit submit button then this method run 
   */
  submit() {
    try {
      this.showEditorId = false;
      console.log(this.editorContent, '   data');
      this.QuestionModel = new Question();
      this.QuestionModel.createdDate = new Date();
      this.QuestionModel.like = [];
      this.QuestionModel.rate = [];
      this.QuestionModel.user = this.user;
      this.QuestionModel.message = this.editorContent;
      console.log(this.QuestionModel);
      this.question = this.QuestionModel;
      const obj = {
        message: this.editorContent,
        notesId: this.cardToken
      }
      this.noteService.addMessageQA(obj).subscribe(data => {
        console.log(data);
        this.openSnackBar('Question Added successfully', '');
        this.editorContent = '';
      }, err => {
        console.log(err);

      })
    } catch (error) {
      console.log('error in submit method in ask component');

    }
  }


  /**
   * @description :this method is for when user press close button then it navigate the page to notes component only
   */
  close() {
    this.route.navigate(['../dashboard'])
  }

  /**
   * @description :this method is for open the snackbar
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  replyIt(id) {
    console.log(id);

    this.replyModel = new reply();
    this.showEditorId = false;
    this.replyModel.message = this.editorContent;
    this.replyModel.id = id;
    if (this.editorContent.length < 30 && this.question != undefined) {
      this.openSnackBar('Not a proper Answer', '');
      this.editorContent = '';
      return;
    }
    console.log(this.replyModel);

    this.replyService(this.replyModel);
  }


  replyService(body) {
    this.noteService.reply(body).subscribe(data => {
      console.log('data after reply the question', data);
      this.openSnackBar('Thankyou For Your Answer', '');

    }, err => {
      console.log('err after reply ', err);

    })
  }
  /**
   * @description this will show thee editor to add answer
   * @param index 
   */
  setId(index) {
    console.log('data is ', index);
    console.log('id is ', index.id);

    this.showId = index.id;
  }
  setSecondId(index) {
    this.secondId = index.id;
  }
  showSecondReplyMethod(id) {
    this.showSecondReply = true;
    this.showSecondId = id;
  }
  hideSecondReplyMethod(id) {
    if (this.showSecondId == id) {
      this.showSecondId = '';
    }
  }
  showEditor(question) {
    console.log(question);

    this.showEditorId = question.id
  }
}

