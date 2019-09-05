import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CheckListDisplayComponent } from './check-list-display.component';
import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';

import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ResetComponent } from '../reset/reset.component';
import { SelectServiceComponent } from '../select-service/select-service.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
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
import { MatCardModule, MatFormFieldModule, MatIconModule, MatToolbarModule, MatInputModule, MatDividerModule, MatSidenavModule, MatMenuModule, MatListModule, MatChipsModule, MatTooltipModule, MatOptionModule, MatProgressBarModule } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxMasonryModule } from 'ngx-masonry';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { AskQuestionsComponent } from '../ask-questions/ask-questions.component';
import { LikeComponent } from '../like/like.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { BarRatingModule } from 'ngx-bar-rating';

describe('CheckListDisplayComponent', () => {
  let component: CheckListDisplayComponent;
  let fixture: ComponentFixture<CheckListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [SearchFilterPipe, DateTimePipe, CheckListDisplayComponent, ResetComponent, SelectServiceComponent, RegistrationComponent, LoginComponent,
        ForgetComponent, DashboardComponent, NotesComponent, DisplayComponent, MasonryComponent,
        TakeNoteComponent, ReminderComponent, ArchiveComponent, TrashComponent, UpdateComponent, CollaboratorComponent,
        SearchComponent, LabelComponent, EditLabelsComponent, AskQuestionComponent, IconComponent, ShoppingCartComponent,
      AskQuestionsComponent,LikeComponent,StarRatingComponent],
      imports: [MatCheckboxModule, RouterTestingModule, BrowserModule,
    BrowserModule, MatCardModule, ReactiveFormsModule, MatFormFieldModule,
        HttpClientModule, MatIconModule, MatToolbarModule, MatInputModule, MatDividerModule,
         MatSidenavModule, MatMenuModule,
        BrowserAnimationsModule, Ng4LoadingSpinnerModule, MatChipsModule,
        FormsModule, MatListModule,MatTooltipModule,NgxMasonryModule,MatOptionModule,FroalaEditorModule,
        AppRoutingModule,OwlDateTimeModule,MatProgressBarModule,BarRatingModule,

         RouterTestingModule.withRoutes([{ path: 'addNote', component: CheckListDisplayComponent }])
      ],
      providers: [SearchFilterPipe, DateTimePipe]


    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
