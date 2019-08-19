import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [MatCardModule,
        BrowserModule,
        MatFormFieldModule,
        MatInputModule,
      BrowserAnimationsModule,
      // NgxSpinnerModule,
      MatIconModule,
      MatSnackBarModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterTestingModule.withRoutes([{path:'login',component:LoginComponent}])]
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





});