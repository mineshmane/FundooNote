import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AskQuestionComponent } from './ask-question.component';

import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { AppComponent } from 'src/app/app.component';
import { MatCardModule, MatIconModule, MatChipsModule, MatMenuModule, MatDividerModule, MatCheckboxModule, MatTooltipModule, MatFormFieldModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxMasonryModule } from 'ngx-masonry';
import { RouterTestingModule } from '@angular/router/testing';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BrowserModule } from '@angular/platform-browser';

describe('AskQuestionComponent', () => {
  let component: AskQuestionComponent;
  let fixture: ComponentFixture<AskQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AskQuestionComponent,SearchFilterPipe, DateTimePipe ],
      imports: [MatCardModule, RouterTestingModule,FroalaEditorModule, FroalaViewModule, Ng4LoadingSpinnerModule, FormsModule, HttpClientModule,
        MatIconModule, MatChipsModule, MatMenuModule, OwlDateTimeModule, OwlNativeDateTimeModule,FormsModule
        , NgxMasonryModule, MatDividerModule, MatCheckboxModule, MatTooltipModule, MatFormFieldModule, MatSnackBarModule, MatDialogModule
        , BrowserModule, 
  
        ReactiveFormsModule,
    
      ],
      providers: [SearchFilterPipe, DateTimePipe]
     
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('add message ',()=>{
  //   expect()
  // })
});


