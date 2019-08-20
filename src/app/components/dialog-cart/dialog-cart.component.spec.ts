import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCartComponent } from './dialog-cart.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ResetComponent } from '../reset/reset.component';
import { SelectServiceComponent } from '../select-service/select-service.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { ForgetComponent } from '../forget/forget.component';
import { NotesComponent } from '../notes/notes.component';
import { DisplayComponent } from '../display/display.component';
import { TakeNoteComponent } from '../take-note/take-note.component';
import { ReminderComponent } from '../reminder/reminder.component';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { UpdateComponent } from '../update/update.component';
import { SearchComponent } from '../search/search.component';
import { LabelComponent } from '../label/label.component';
import { AskQuestionComponent } from '../ask-question/ask-question.component';
import { IconComponent } from '../icon/icon.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { AppComponent } from 'src/app/app.component';
import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { CheckListDisplayComponent } from '../check-list-display/check-list-display.component';
import {
  MatIconModule, MatFormFieldModule, MatMenuModule, MatCardModule, MatDividerModule,
  MatToolbarModule, MatSidenavModule, MatInputModule, MatChipsModule,
  MatTooltipModule, MatCheckboxModule, MatListModule,
  MatProgressBarModule, MatTabsModule, MatDialogRef
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxMasonryModule } from 'ngx-masonry';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'
describe('DialogCartComponent', () => {
  let component: DialogCartComponent;
  let fixture: ComponentFixture<DialogCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, DialogCartComponent, ResetComponent, SelectServiceComponent, RegistrationComponent, LoginComponent, ForgetComponent
        , NotesComponent, DisplayComponent, TakeNoteComponent, ReminderComponent, ArchiveComponent, TrashComponent, UpdateComponent
        , SearchComponent, LabelComponent, AskQuestionComponent, IconComponent, ShoppingCartComponent,
        AppComponent, SearchFilterPipe, DateTimePipe, CheckListDisplayComponent, MasonryComponent,
        AskQuestionsComponent,LikeComponent,StarRatingComponent
      ],
      imports: [MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatMenuModule, MatCardModule
        , MatDividerModule, MatToolbarModule, MatSidenavModule,  HttpClientModule,
        MatInputModule, Ng4LoadingSpinnerModule, MatChipsModule, MatTooltipModule, NgxMasonryModule, MatCheckboxModule,
        FroalaEditorModule, FroalaViewModule, OwlDateTimeModule,
        BrowserAnimationsModule, MatDialogModule, MatToolbarModule, MatTabsModule,
        FormsModule,BarRatingModule,
        AppRoutingModule,
        MatListModule, RouterTestingModule, MatProgressBarModule
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
    fixture = TestBed.createComponent(DialogCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); import { from } from 'rxjs';
import { MasonryComponent } from 'src/app/masonry/masonry.component';
import { AskQuestionsComponent } from '../ask-questions/ask-questions.component';
import { LikeComponent } from '../like/like.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { BarRatingModule } from 'ngx-bar-rating';

