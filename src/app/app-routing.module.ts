import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetComponent } from './components/reset/reset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { IconComponent } from './components/icon/icon.component';
import { NotesComponent } from './components/notes/notes.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';


const routes: Routes = [
  { path: 'resetpassword/:token', component: ResetComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget', component: ForgetComponent },
  {
    path: 'dashboard', component: DashboardComponent,

    children: [
      {
        path: '', redirectTo: 'notes', pathMatch: 'full'
      },
      {
        path: 'notes', component: NotesComponent
      },
      {
        path: 'reminder', component: ReminderComponent
      },
      {
        path: 'archive', component: ArchiveComponent
      },
      {
        path: 'trash', component: TrashComponent
      },
      
    ]

  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
