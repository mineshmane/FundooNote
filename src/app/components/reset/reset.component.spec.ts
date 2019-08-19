import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetComponent } from './reset.component';
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
import { MatCardModule, MatIconModule, MatChipsModule, MatDividerModule, MatTooltipModule, MatMenuModule, MatCheckboxModule, MatSnackBarModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxMasonryModule } from 'ngx-masonry';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ResetComponent', () => {
  let component: ResetComponent;
  let fixture: ComponentFixture<ResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetComponent ],
        imports: [FlexLayoutModule, RouterTestingModule, MatCardModule, Ng4LoadingSpinnerModule, MatIconModule,
          MatChipsModule, MatDividerModule, NgxMasonryModule,MatTooltipModule,MatMenuModule,OwlDateTimeModule,
          MatCheckboxModule,ReactiveFormsModule,FormsModule,HttpClientModule,MatSnackBarModule,
          MatFormFieldModule,BrowserAnimationsModule,
          MatInputModule
              
                ],
                providers: [SearchFilterPipe, DateTimePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
