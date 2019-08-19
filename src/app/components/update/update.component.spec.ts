import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';

import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { TakeNoteComponent } from '../take-note/take-note.component';
import { IconComponent } from '../icon/icon.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatIconModule, MatChipsModule, MatDividerModule, MatTooltipModule, MatMenuModule, MatCheckboxModule, MatSnackBarModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateComponent,IconComponent,SearchFilterPipe, DateTimePipe],
      imports: [FlexLayoutModule, RouterTestingModule, MatCardModule, Ng4LoadingSpinnerModule,
        MatIconModule,
        MatChipsModule, MatDividerModule,  MatTooltipModule, MatMenuModule,
        OwlDateTimeModule,
        MatCheckboxModule, ReactiveFormsModule, FormsModule, HttpClientModule, MatSnackBarModule,
        MatFormFieldModule, BrowserAnimationsModule, MatDialogModule,
        MatInputModule, OwlNativeDateTimeModule,

      ],
      providers: [SearchFilterPipe, DateTimePipe , {
        provide: MatDialogRef,
        useValue: {
          close: (dialogResult: any) => { }
        }
      }, { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
