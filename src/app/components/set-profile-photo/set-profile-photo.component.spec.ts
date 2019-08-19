import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProfilePhotoComponent } from './set-profile-photo.component';
import { ArchiveComponent } from '../archive/archive.component';
import { User } from 'src/app/model/register';
import { AskQuestionComponent } from '../ask-question/ask-question.component';
import { TrashComponent } from '../trash/trash.component';
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
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatProgressBarModule, MatDividerModule, MatDialogRef, MAT_DIALOG_DATA, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('SetProfilePhotoComponent', () => {
  let component: SetProfilePhotoComponent;
  let fixture: ComponentFixture<SetProfilePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetProfilePhotoComponent],
      imports: [FlexLayoutModule, RouterTestingModule, ImageCropperModule, MatProgressBarModule,
        MatDividerModule, HttpClientModule, MatSnackBarModule

      ],
      providers: [SearchFilterPipe, DateTimePipe, {
        provide: MatDialogRef,
        useValue: {
          close: (dialogResult: any) => { }
        }
      }, { provide: MAT_DIALOG_DATA, useValue: {} },]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetProfilePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
