import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveComponent } from './archive.component';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from '../login/login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationComponent } from '../registration/registration.component';
import { ForgetComponent } from '../forget/forget.component';
import { ResetComponent } from '../reset/reset.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotesComponent } from '../notes/notes.component';
import { ReminderComponent } from '../reminder/reminder.component';
import { LabelComponent } from '../label/label.component';
// import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { IconComponent } from '../icon/icon.component';
import { DisplayComponent } from '../display/display.component'
import { SearchFilterPipe } from '../../pipe/search-filter.pipe';
import { SearchComponent } from '../search/search.component';
import { materialModule } from '../../app.material.module';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { SetProfilePhotoComponent } from '../set-profile-photo/set-profile-photo.component';

import { AskQuestionComponent } from '../ask-question/ask-question.component'
import { User } from '../../model/register';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { from } from 'rxjs';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { EditLabelsComponent } from '../edit-labels/edit-labels.component';
import { TakeNoteComponent } from '../take-note/take-note.component';
import { UpdateComponent } from '../update/update.component';

describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveComponent ,User,AskQuestionComponent,TrashComponent,SetProfilePhotoComponent,CollaboratorComponent
      ,SearchComponent,DisplayComponent,IconComponent,LabelComponent,EditLabelsComponent,LoginComponent,RegistrationComponent,
    ,ForgetComponent,ResetComponent,ReminderComponent,DashboardComponent,DisplayComponent,NotesComponent,SearchComponent,TakeNoteComponent,
 UpdateComponent,AskQuestionComponent,ArchiveComponent ],
      imports: [FlexLayoutModule, RouterTestingModule,
                materialModule,DebugElement
              ],
              providers: [SearchFilterPipe, DateTimePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
