import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetComponent } from './components/reset/reset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { materialModule } from './app.material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { NotesComponent } from './components/notes/notes.component';
import { TakeNoteComponent } from './components/take-note/take-note.component';
import { IconComponent } from './components/icon/icon.component';
import { DisplayComponent } from './components/display/display.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { UpdateComponent } from './components/update/update.component';
import { EditLabelsComponent } from './components/edit-labels/edit-labels.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetComponent,
    ResetComponent,
    DashboardComponent,
    NotesComponent,
    TakeNoteComponent,
    IconComponent,
    DisplayComponent,
    ReminderComponent,
    ArchiveComponent,
    TrashComponent,
    UpdateComponent,
    EditLabelsComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    materialModule,
    FormsModule, ReactiveFormsModule,HttpClientModule,
    MatSnackBarModule,MatNativeDateModule, MatRippleModule
  ],
  entryComponents:[UpdateComponent,EditLabelsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
