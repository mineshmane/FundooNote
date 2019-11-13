import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { MatCardModule, MatIconModule, MatChipsModule, MatDividerModule, MatTooltipModule, MatMenuModule, MatCheckboxModule, MatSnackBarModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxMasonryModule } from 'ngx-masonry';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [FlexLayoutModule, RouterTestingModule, MatCardModule, Ng4LoadingSpinnerModule, MatIconModule,
        MatChipsModule, MatDividerModule, NgxMasonryModule, MatTooltipModule, MatMenuModule, OwlDateTimeModule,
        MatCheckboxModule, ReactiveFormsModule, FormsModule, HttpClientModule, MatSnackBarModule,
        MatFormFieldModule, BrowserAnimationsModule,
        MatInputModule

      ],
      providers: [SearchFilterPipe, DateTimePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.registerForm.controls['firstName'].setValue('minesh');
    component.registerForm.controls['lastName'].setValue('Mane');
    component.registerForm.controls['email'].setValue('mineshmane94@gmail.com');
    component.registerForm.controls['password'].setValue('123123');
    component.registerForm.controls['cpassword'].setValue('123123');
    expect(component).toBeTruthy();
  });
});
