import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';
import { ArchiveComponent } from '../archive/archive.component';
import { User } from 'src/app/model/register';
import { AskQuestionComponent } from '../ask-question/ask-question.component';
import { TrashComponent } from '../trash/trash.component';
import { SetProfilePhotoComponent } from '../set-profile-photo/set-profile-photo.component';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { SearchComponent } from '../search/search.component';
import { DisplayComponent } from '../display/display.component';
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
import { MatMenuModule, MatIconModule, MatCardModule, MatChipsModule, MatDividerModule, MatTooltipModule, MatCheckboxModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxMasonryModule } from 'ngx-masonry';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconComponent,SearchFilterPipe ],
        imports: [FlexLayoutModule, RouterTestingModule, MatCardModule, Ng4LoadingSpinnerModule, MatIconModule,
          MatChipsModule, MatDividerModule, NgxMasonryModule,MatTooltipModule,MatMenuModule,OwlDateTimeModule,
          MatCheckboxModule,ReactiveFormsModule,FormsModule,HttpClientModule,MatSnackBarModule,
          MatFormFieldModule,BrowserAnimationsModule,MatDialogModule,
          MatInputModule, OwlNativeDateTimeModule,
                ],
                providers: [SearchFilterPipe, DateTimePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
