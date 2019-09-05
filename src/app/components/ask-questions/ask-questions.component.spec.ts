



import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import "froala-editor/js/froala_editor.pkgd.min.js";

import { AskQuestionsComponent } from './ask-questions.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BarRatingModule } from "ngx-bar-rating";
import { LikeComponent } from '../like/like.component';
import { CheckListDisplayComponent } from '../check-list-display/check-list-display.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
// import { ReplyComponent } from '../reply/reply.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule,By } from "@angular/platform-browser";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatToolbarModule, MatSidenavModule, MatChipsModule, MatListModule, MatTooltipModule, MatOptionModule, MatProgressBarModule,} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule, MatIconModule, } from '@angular/material';
import { 
  MatDividerModule,MatCheckboxModule

} from "@angular/material";
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';




import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxMasonryModule } from 'ngx-masonry';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { ResetComponent } from '../reset/reset.component';
import { SelectServiceComponent } from '../select-service/select-service.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { ForgetComponent } from '../forget/forget.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotesComponent } from '../notes/notes.component';
import { DisplayComponent } from '../display/display.component';
import { MasonryComponent } from 'src/app/masonry/masonry.component';
import { TakeNoteComponent } from '../take-note/take-note.component';
import { ReminderComponent } from '../reminder/reminder.component';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { UpdateComponent } from '../update/update.component';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { SearchComponent } from '../search/search.component';
import { LabelComponent } from '../label/label.component';
import { EditLabelsComponent } from '../edit-labels/edit-labels.component';
import { AskQuestionComponent } from '../ask-question/ask-question.component';
import { IconComponent } from '../icon/icon.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('AskQuestionsComponent', () => {
  let component: AskQuestionsComponent;
  let fixture: ComponentFixture<AskQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFilterPipe, DateTimePipe, CheckListDisplayComponent, ResetComponent, SelectServiceComponent, RegistrationComponent, LoginComponent,
        ForgetComponent, DashboardComponent, NotesComponent, DisplayComponent, MasonryComponent,
        TakeNoteComponent, ReminderComponent, ArchiveComponent, TrashComponent, UpdateComponent, CollaboratorComponent,
        SearchComponent, LabelComponent, EditLabelsComponent, AskQuestionComponent, IconComponent, ShoppingCartComponent,
      AskQuestionsComponent,LikeComponent,StarRatingComponent
       ],
    imports:[
         FormsModule, ReactiveFormsModule,BrowserAnimationsModule,
      //   HttpClientModule,BrowserModule,
      //   MatMenuModule,MatIconModule,
      //   MatCardModule,
      //   MatFormFieldModule,
      //   MatInputModule,
      //   RouterTestingModule.withRoutes([{path:'addNote',component:AskQuestionsComponent}])
      //   ,MatDividerModule,
      
      //   ,Ng4LoadingSpinnerModule,
      //   FroalaEditorModule.forRoot(),
      //   FroalaViewModule.forRoot(),
      //   NgxSpinnerModule,
      //   BarRatingModule
      MatCheckboxModule, RouterTestingModule, BrowserModule,
    BrowserModule, MatCardModule, ReactiveFormsModule, MatFormFieldModule,
        HttpClientModule, MatIconModule, MatToolbarModule, MatInputModule, MatDividerModule,
         MatSidenavModule, MatMenuModule,MatSnackBarModule,
        BrowserAnimationsModule, Ng4LoadingSpinnerModule, MatChipsModule,
        FormsModule, MatListModule,MatTooltipModule,NgxMasonryModule,MatOptionModule,FroalaEditorModule,
        AppRoutingModule,OwlDateTimeModule,MatProgressBarModule,BarRatingModule,

         RouterTestingModule.withRoutes([{ path: '', component: CheckListDisplayComponent }])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
