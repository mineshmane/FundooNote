import { TestBed } from '@angular/core/testing';

import { CartServiceService } from './cart-service.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
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
import { ResetComponent } from 'src/app/components/reset/reset.component';
import { SelectServiceComponent } from 'src/app/components/select-service/select-service.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ForgetComponent } from 'src/app/components/forget/forget.component';
import { NotesComponent } from 'src/app/components/notes/notes.component';
import { DisplayComponent } from 'src/app/components/display/display.component';
import { TakeNoteComponent } from 'src/app/components/take-note/take-note.component';
import { ReminderComponent } from 'src/app/components/reminder/reminder.component';
import { ArchiveComponent } from 'src/app/components/archive/archive.component';
import { TrashComponent } from 'src/app/components/trash/trash.component';
import { UpdateComponent } from 'src/app/components/update/update.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { LabelComponent } from 'src/app/components/label/label.component';
import { AskQuestionComponent } from 'src/app/components/ask-question/ask-question.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { AppComponent } from 'src/app/app.component';
import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { CheckListDisplayComponent } from 'src/app/components/check-list-display/check-list-display.component';
import { MasonryComponent } from 'src/app/masonry/masonry.component';
import { LikeComponent } from 'src/app/components/like/like.component';
import { StarRatingComponent } from 'src/app/components/star-rating/star-rating.component';
import { AskQuestionsComponent } from 'src/app/components/ask-questions/ask-questions.component';
import { BarRatingModule } from 'ngx-bar-rating';

describe('CartServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    declarations: [ResetComponent,SelectServiceComponent,DashboardComponent, ResetComponent, SelectServiceComponent, RegistrationComponent, LoginComponent, ForgetComponent
      , NotesComponent, DisplayComponent, TakeNoteComponent, ReminderComponent, ArchiveComponent, TrashComponent, UpdateComponent
      , SearchComponent, LabelComponent, AskQuestionComponent, IconComponent, ShoppingCartComponent,
      AppComponent, SearchFilterPipe, DateTimePipe, CheckListDisplayComponent,MasonryComponent ,AskQuestionsComponent,LikeComponent,StarRatingComponent ],
   
   
      imports: [AppRoutingModule ,MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatMenuModule, MatCardModule
      , MatDividerModule, MatToolbarModule, MatSidenavModule, BrowserModule, HttpClientModule,
      MatInputModule, Ng4LoadingSpinnerModule, MatChipsModule, MatTooltipModule, NgxMasonryModule, MatCheckboxModule,
      FroalaEditorModule, FroalaViewModule,OwlDateTimeModule,
      BrowserAnimationsModule,MatDialogModule,MatToolbarModule,
      FormsModule,BarRatingModule,
      AppRoutingModule,
      MatListModule, RouterTestingModule,MatProgressBarModule ],
  }));

  it('should be created', () => {
    const service: CartServiceService = TestBed.get(CartServiceService);
    expect(service).toBeTruthy();
  });
});
