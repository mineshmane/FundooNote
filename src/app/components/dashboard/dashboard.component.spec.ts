import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ArchiveComponent } from '../archive/archive.component';
import { User } from 'src/app/model/register';
import { AskQuestionComponent } from '../ask-question/ask-question.component';
import { TrashComponent } from '../trash/trash.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { materialModule } from 'src/app/app.material.module';
import { DebugElement } from '@angular/core';
import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { MatIconModule, MatFormFieldModule, MatMenuModule, MatCardModule, MatDividerModule, MatToolbarModule, MatSidenavModule, MatListModule, ErrorStateMatcher, MatInputModule, MatChipsModule, MatTooltipModule, MatCheckboxModule, MatProgressBarModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ResetComponent } from '../reset/reset.component';
import { SelectServiceComponent } from '../select-service/select-service.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { ForgetComponent } from '../forget/forget.component';
import { NotesComponent } from '../notes/notes.component';
import { DisplayComponent } from '../display/display.component';
import { TakeNoteComponent } from '../take-note/take-note.component';
import { ReminderComponent } from '../reminder/reminder.component';
import { UpdateComponent } from '../update/update.component';
import { SearchComponent } from '../search/search.component';
import { LabelComponent } from '../label/label.component';
import { IconComponent } from '../icon/icon.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AppComponent } from 'src/app/app.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { CheckListDisplayComponent } from '../check-list-display/check-list-display.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { MasonryComponent } from 'src/app/masonry/masonry.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, ResetComponent, SelectServiceComponent, RegistrationComponent, LoginComponent, ForgetComponent
        , NotesComponent, DisplayComponent, TakeNoteComponent, ReminderComponent, ArchiveComponent, TrashComponent, UpdateComponent
        , SearchComponent, LabelComponent, AskQuestionComponent, IconComponent, ShoppingCartComponent,
        AppComponent, SearchFilterPipe, DateTimePipe, CheckListDisplayComponent,MasonryComponent
      ],
      imports: [MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatMenuModule, MatCardModule
        , MatDividerModule, MatToolbarModule, MatSidenavModule, BrowserModule, HttpClientModule,
        MatInputModule, Ng4LoadingSpinnerModule, MatChipsModule, MatTooltipModule, NgxMasonryModule, MatCheckboxModule,
        FroalaEditorModule, FroalaViewModule,OwlDateTimeModule,
        BrowserAnimationsModule,MatDialogModule,MatToolbarModule,
        FormsModule,
        AppRoutingModule,
        MatListModule, RouterTestingModule,MatProgressBarModule
      ],
      providers: [SearchFilterPipe, DateTimePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
