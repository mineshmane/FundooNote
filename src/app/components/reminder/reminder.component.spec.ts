import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderComponent } from './reminder.component';
import { ArchiveComponent } from '../archive/archive.component';
import { User } from 'src/app/model/register';
import { AskQuestionComponent } from '../ask-question/ask-question.component';
import { TrashComponent } from '../trash/trash.component';
import { SetProfilePhotoComponent } from '../set-profile-photo/set-profile-photo.component';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { SearchComponent } from '../search/search.component';
import { DisplayComponent } from '../display/display.component';
import { IconComponent } from '../icon/icon.component';
import { LabelComponent } from '../label/label.component';
import { EditLabelsComponent } from '../edit-labels/edit-labels.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ForgetComponent } from '../forget/forget.component';
import { ResetComponent } from '../reset/reset.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotesComponent } from '../notes/notes.component';
import { TakeNoteComponent } from '../take-note/take-note.component';
import { UpdateComponent } from '../update/update.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { materialModule } from 'src/app/app.material.module';
import { DebugElement } from '@angular/core';
import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { MatCardModule, MatIconModule, MatChipsModule, MatMenuModule, MatDividerModule, MatCheckboxModule, MatTooltipModule, MatFormFieldModule, MatSnackBarModule, MatDialogModule, MatTextareaAutosize, MatInputModule } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserModule } from '@angular/platform-browser';

describe('ReminderComponent', () => {
  let component: ReminderComponent;
  let fixture: ComponentFixture<ReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderComponent,TakeNoteComponent,SearchFilterPipe, DateTimePipe,DisplayComponent,
      IconComponent ],
        imports: [MatCardModule, RouterTestingModule, Ng4LoadingSpinnerModule,FormsModule,HttpClientModule,
          MatIconModule, MatChipsModule,MatMenuModule,OwlDateTimeModule, OwlNativeDateTimeModule
         , NgxMasonryModule, MatDividerModule, MatCheckboxModule, BrowserModule,ReactiveFormsModule,
         MatInputModule,

         
         MatTooltipModule,MatFormFieldModule,MatSnackBarModule,MatDialogModule
                
                ],
                providers: [SearchFilterPipe, DateTimePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
