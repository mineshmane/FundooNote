import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AskQuestionComponent } from './ask-question.component';
import { ArchiveComponent } from '../archive/archive.component';
import { User } from 'src/app/model/register';
import { TrashComponent } from '../trash/trash.component';
import { SetProfilePhotoComponent } from '../set-profile-photo/set-profile-photo.component';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { SearchComponent } from '../search/search.component';
import { DisplayComponent } from '../display/display.component';
import { IconComponent } from '../icon/icon.component';
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

describe('AskQuestionComponent', () => {
  let component: AskQuestionComponent;
  let fixture: ComponentFixture<AskQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveComponent, User, AskQuestionComponent, TrashComponent, SetProfilePhotoComponent, CollaboratorComponent
        , SearchComponent, DisplayComponent, IconComponent, LabelComponent, EditLabelsComponent, LoginComponent, RegistrationComponent,
        , ForgetComponent, ResetComponent, ReminderComponent, DashboardComponent, DisplayComponent, NotesComponent, SearchComponent, TakeNoteComponent,
        UpdateComponent, AskQuestionComponent, ArchiveComponent],
      imports: [FlexLayoutModule, RouterTestingModule,
        materialModule, DebugElement
      ],
      providers: [SearchFilterPipe, DateTimePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


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
// import { DisplayComponent } from '../display/display.component';
// import { SearchFilterPipe } from '../../pipe/search-filter.pipe';
// import { SearchComponent } from '../search/search.component';
// // import { DialogComponent } from '../dialog/dialog.component';
// import { CollaboratorComponent } from '../collaborator/collaborator.component';
// import { SetProfilePhotoComponent } from '../set-profile-photo/set-profile-photo.component';
// // import { SearchmatcardsComponent } from '../searchmatcards/searchmatcards.component';
// // import { ShowLabelnotesComponent } from '../show-labelnotes/show-labelnotes.component';
// // import { PinComponent }  from '../pin/pin.component';
// // import { LabelComponent } from '../label/label.component';
// import { materialModule } from '../../app.material.module';
// import { DateTimePipe } from '../../pipes/date-time.pipe';
// import { AskQuestionComponent } from '../ask-question/ask-question.component'
// // import { ComponentlifecycleComponent } from '../componentlifecycle/componentlifecycle.component'
// // import { AddcartComponent } from '../addcart/addcart.component'
// // import { DialogcartComponent } from '../dialogcart/dialogcart.component';
// // import { ProductPurchaseComponent } from '../product-purchase/product-purchase.component';
// // import { PlaceOrderComponent } from '../place-order/place-order.component';
// // import { CompletePaymentComponent } from '../complete-payment/complete-payment.component';
// describe('AskQuestionComponent', () => {
//   let component: AskQuestionComponent;
//   let fixture: ComponentFixture<AskQuestionComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ReminderComponent, DashboardComponent, NotesComponent, LabelComponent, ArchiveComponent, TrashComponent, IconComponent, SearchComponent, CollaboratorComponent, SetProfilePhotoComponent, , LabelComponent, AskQuestionComponent, SearchFilterPipe,
//         DateTimePipe, DisplayComponent, ForgetComponent, ResetComponent, LoginComponent, RegistrationComponent],
//       imports: [FlexLayoutModule, RouterTestingModule,
//         materialModule
//       ],
//       providers: [SearchFilterPipe, DateTimePipe]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AskQuestionComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
