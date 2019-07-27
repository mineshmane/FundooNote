import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
// });




// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { LoginComponent } from '../login/login.component';
// import { RouterTestingModule } from '@angular/router/testing';
// import { RegistrationComponent } from '../registration/registration.component';
// import { ForgetComponent } from '../forget/forget.component';
// import { ResetComponent } from '../reset/reset.component';
// import { DashboardComponent } from '../dashboard/dashboard.component';
// import { NotesComponent } from '../notes/notes.component';
// import { ReminderComponent } from '../reminder/reminder.component';
// import { LabelComponent } from '../label/label.component';
// import { ArchiveComponent } from '../archive/archive.component';
// import { TrashComponent } from '../trash/trash.component';
// import { IconComponent } from '../icon/icon.component';
// import { DisplayComponent } from '../display/display.component'
// import { SearchFilterPipe } from '../../pipe/search-filter.pipe';
// import { SearchComponent } from '../search/search.component';
// import { materialModule } from '../../app.material.module';
// import { CollaboratorComponent } from '../collaborator/collaborator.component';
// import { SetProfilePhotoComponent } from '../set-profile-photo/set-profile-photo.component';

// import { AskQuestionComponent } from '../ask-question/ask-question.component'
// import { User } from '../../model/register';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { from } from 'rxjs';
// import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let de: DebugElement;
//   let el: HTMLElement;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [

//         ReminderComponent, DashboardComponent, NotesComponent,
//         LabelComponent, ArchiveComponent, TrashComponent, IconComponent, SearchComponent,
//         CollaboratorComponent, SetProfilePhotoComponent
//         , AskQuestionComponent,
//         SearchFilterPipe, DateTimePipe, ResetComponent,
//         LoginComponent, RegistrationComponent],
//       imports: [FlexLayoutModule, RouterTestingModule,
//         materialModule
//       ],
//       providers: [SearchFilterPipe, DateTimePipe]
//     })
//       .compileComponents().then(() => {
//         fixture = TestBed.createComponent(LoginComponent);
//         component = fixture.componentInstance;
//       })
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should be invalid', () => {
//     // component.email.setValue[''];
//     component.loginForm.setValue['']
//     // component.password.setValue[''];
//     expect(component.loginForm.valid).toBeFalsy()
//     // expect(component.email.valid).toBeFalsy();
//     // expect(component.password.valid).toBeFalsy();
//   });
//   it('should be valid', async(() => {
//     // component.email.setValue('assddf@sdfd.sdfsd');
//     // component.password.setValue('Asdd12Af');
//     // expect(component.email.valid).toBeTruthy();
//     // expect(component.password.valid).toBeTruthy();
//     // component.loginForm.setValue('mineshmane94@gmail.com');
//     // component.loginForm.setValue('tytcfgvg');
//     expect(component.loginForm.valid).toBeTruthy();
//   }));
//   it('it should call the login method', async(() => {
//     fixture.detectChanges();
//     spyOn(component, 'loginUser');
//     el = fixture.debugElement.query(By.css('button')).nativeElement;
//   }))
});