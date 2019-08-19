import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeNoteComponent } from './take-note.component';

import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { MatIconModule, MatInputModule, MatCardModule, MatChipsModule, MatDividerModule, MatTooltipModule, MatMenuModule, MatCheckboxModule, MatSnackBarModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconComponent } from '../icon/icon.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';

describe('TakeNoteComponent', () => {
  let component: TakeNoteComponent;
  let fixture: ComponentFixture<TakeNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TakeNoteComponent,IconComponent,SearchFilterPipe, DateTimePipe],
      imports: [FlexLayoutModule, RouterTestingModule, MatCardModule, Ng4LoadingSpinnerModule,
        MatIconModule,
        MatChipsModule, MatDividerModule,  MatTooltipModule, MatMenuModule,
        OwlDateTimeModule,
        MatCheckboxModule, ReactiveFormsModule, FormsModule, HttpClientModule, MatSnackBarModule,
        MatFormFieldModule, BrowserAnimationsModule, MatDialogModule,
        MatInputModule, OwlNativeDateTimeModule,

      ],
      providers: [SearchFilterPipe, DateTimePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
