import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import "froala-editor/js/froala_editor.pkgd.min.js";

import { AskQuestionsComponent } from './ask-questions.component';
import { AskQuestionComponent } from '../ask-question/ask-question.component';
import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { MatCardModule, MatIconModule, MatChipsModule, MatMenuModule, MatDividerModule, MatCheckboxModule, MatTooltipModule, MatFormFieldModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserModule } from '@angular/platform-browser';
import { LikeComponent } from '../like/like.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { materialModule } from 'src/app/app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AskQuestionsComponent', () => {
  let component: AskQuestionsComponent;
  let fixture: ComponentFixture<AskQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AskQuestionsComponent,SearchFilterPipe, DateTimePipe ,LikeComponent,
        StarRatingComponent],
      imports: [MatCardModule, RouterTestingModule,FroalaEditorModule, 
        FroalaViewModule, Ng4LoadingSpinnerModule, FormsModule, HttpClientModule,
        MatIconModule, MatChipsModule, MatMenuModule, OwlDateTimeModule,
         OwlNativeDateTimeModule,FormsModule
        , NgxMasonryModule, MatDividerModule, MatCheckboxModule, MatTooltipModule,
         MatFormFieldModule, MatSnackBarModule, MatDialogModule
        , BrowserModule, BarRatingModule,materialModule,BrowserAnimationsModule,
  
        ReactiveFormsModule,Ng4LoadingSpinnerModule
    
      ],
      providers: [SearchFilterPipe, DateTimePipe]
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
