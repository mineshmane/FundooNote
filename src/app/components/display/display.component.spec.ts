import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { ArchiveComponent } from '../archive/archive.component';
import { User } from 'src/app/model/register';
import { AskQuestionComponent } from '../ask-question/ask-question.component';
import { TrashComponent } from '../trash/trash.component';
import { SetProfilePhotoComponent } from '../set-profile-photo/set-profile-photo.component';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { SearchComponent } from '../search/search.component';
import { IconComponent } from '../icon/icon.component';
import { LabelComponent } from '../label/label.component';
import { EditLabelsComponent } from '../edit-labels/edit-labels.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ForgetComponent } from '../forget/forget.component';
import { ResetComponent } from '../reset/reset.component';
import { ReminderComponent } from '../reminder/reminder.component';
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
import { MatCardModule, MatIconModule, MatChipsModule, MatTooltipModule, MatDividerModule, MatMenuModule, MatInputModule, MatCheckboxModule, MatSnackBarModule, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxMasonryModule } from 'ngx-masonry';
import { CheckListDisplayComponent } from '../check-list-display/check-list-display.component';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { NgModel, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayComponent, SearchFilterPipe, DateTimePipe, IconComponent, CheckListDisplayComponent],
      imports: [FlexLayoutModule, RouterTestingModule, NgxMasonryModule, MatDividerModule, MatMenuModule,
        MatCardModule, Ng4LoadingSpinnerModule, MatIconModule, MatChipsModule, MatTooltipModule,OwlDateTimeModule,
        MatInputModule,MatMenuModule,MatCheckboxModule,FormsModule,HttpClientModule,
        MatSnackBarModule,MatDialogModule
      ],
      providers: [SearchFilterPipe, DateTimePipe,{
        provide: MatDialogRef,
        useValue: {
          close: (dialogResult: any) => { }
        }
      },{ provide: MAT_DIALOG_DATA, useValue: {} },]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
