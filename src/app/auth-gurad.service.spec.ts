import { TestBed } from '@angular/core/testing';

import { AuthGuradService } from './auth-gurad.service';
import { AppRoutingModule } from './app-routing.module';
import { ResetComponent } from './components/reset/reset.component';
import { SelectServiceComponent } from './components/select-service/select-service.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetComponent } from './components/forget/forget.component';
import { NotesComponent } from './components/notes/notes.component';
import { DisplayComponent } from './components/display/display.component';
import { TakeNoteComponent } from './components/take-note/take-note.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { UpdateComponent } from './components/update/update.component';
import { SearchComponent } from './components/search/search.component';
import { LabelComponent } from './components/label/label.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { IconComponent } from './components/icon/icon.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AppComponent } from './app.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { DateTimePipe } from './pipes/date-time.pipe';
import { CheckListDisplayComponent } from './components/check-list-display/check-list-display.component';
import { MatIconModule, MatFormFieldModule, MatMenuModule, MatCardModule, MatDividerModule, MatToolbarModule, MatSidenavModule, MatInputModule, MatChipsModule, MatTooltipModule, MatCheckboxModule, MatDialogModule, MatListModule, MatProgressBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxMasonryModule } from 'ngx-masonry';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MasonryComponent } from './masonry/masonry.component';

describe('AuthGuradService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    declarations: [ResetComponent,SelectServiceComponent,DashboardComponent, ResetComponent, SelectServiceComponent, RegistrationComponent, LoginComponent, ForgetComponent
      , NotesComponent, DisplayComponent, TakeNoteComponent, ReminderComponent, ArchiveComponent, TrashComponent, UpdateComponent
      , SearchComponent, LabelComponent, AskQuestionComponent, IconComponent, ShoppingCartComponent,
      AppComponent, SearchFilterPipe, DateTimePipe, CheckListDisplayComponent,MasonryComponent  ],
   
   
      imports: [AppRoutingModule ,MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatMenuModule, MatCardModule
      , MatDividerModule, MatToolbarModule, MatSidenavModule, BrowserModule, HttpClientModule,
      MatInputModule, Ng4LoadingSpinnerModule, MatChipsModule, MatTooltipModule, NgxMasonryModule, MatCheckboxModule,
      FroalaEditorModule, FroalaViewModule,OwlDateTimeModule,
      BrowserAnimationsModule,MatDialogModule,MatToolbarModule,
      FormsModule,
      AppRoutingModule,
      MatListModule, RouterTestingModule,MatProgressBarModule ],
  }));



  it('should be created', () => {
    const service: AuthGuradService = TestBed.get(AuthGuradService);
    expect(service).toBeTruthy();
  });
});
