import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetComponent } from './components/reset/reset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { A11yModule } from '@angular/cdk/a11y';

import { MatCardModule } from '@angular/material/card';
import { materialModule } from './app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { NotesComponent } from './components/notes/notes.component';
import { TakeNoteComponent } from './components/take-note/take-note.component';
import { IconComponent } from './components/icon/icon.component';
import { DisplayComponent } from './components/display/display.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { UpdateComponent } from './components/update/update.component';
import { EditLabelsComponent } from './components/edit-labels/edit-labels.component';
import { SearchComponent } from './components/search/search.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { LabelComponent } from './components/label/label.component';
import { SetProfilePhotoComponent } from './components/set-profile-photo/set-profile-photo.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DateTimePipe } from './pipes/date-time.pipe';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { SelectServiceComponent } from './components/select-service/select-service.component';
import { DialogCartComponent } from './components/dialog-cart/dialog-cart.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { MasonryComponent } from './masonry/masonry.component';
import { AuthGuradService } from './auth-gurad.service';
import { AuthService } from './services/authService/auth.service';
import { CheckListDisplayComponent } from './components/check-list-display/check-list-display.component';
import { LikeComponent } from './components/like/like.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { AskQuestionsComponent } from './components/ask-questions/ask-questions.component'
// import { By } from "@angular/platform-browser";
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent, LoginComponent, ForgetComponent, ResetComponent,
     DashboardComponent, NotesComponent, TakeNoteComponent,
    IconComponent, DisplayComponent,
    ReminderComponent, ArchiveComponent,
    TrashComponent, UpdateComponent,
    EditLabelsComponent, SearchComponent,
    SearchFilterPipe, LabelComponent,
    SetProfilePhotoComponent, DateTimePipe,
    CollaboratorComponent,
    AskQuestionComponent,
    SelectServiceComponent,
    DialogCartComponent,
    ShoppingCartComponent,
    MasonryComponent,
    CheckListDisplayComponent,
    LikeComponent,
    StarRatingComponent,
    AskQuestionsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMasonryModule, BrowserAnimationsModule, ScrollingModule, CdkTableModule,
    MatCardModule, CdkTreeModule, A11yModule,
    materialModule, BarRatingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule,
    MatSnackBarModule, MatNativeDateModule, MatRippleModule,
    ImageCropperModule, OwlDateTimeModule, OwlNativeDateTimeModule, FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()

  ],
  entryComponents: [

    UpdateComponent,
    EditLabelsComponent,
    SetProfilePhotoComponent,
    CollaboratorComponent,
    DialogCartComponent
    
  ],

  providers: [AuthGuradService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
