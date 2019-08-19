import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveComponent } from './archive.component';



import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule, MatIconModule, MatCardModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatCheckboxModule, MatChipsModule, MatTooltipModule, MatDialogModule } from '@angular/material';
import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { AppComponent } from 'src/app/app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DisplayComponent } from '../display/display.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxMasonryModule } from 'ngx-masonry';
import { IconComponent } from '../icon/icon.component';
import { CheckListDisplayComponent } from '../check-list-display/check-list-display.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgModule } from '@angular/core';


describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, ArchiveComponent, DisplayComponent, 
        IconComponent, CheckListDisplayComponent,SearchFilterPipe, DateTimePipe],

      imports: [MatCardModule, RouterTestingModule, Ng4LoadingSpinnerModule,FormsModule,HttpClientModule,
         MatIconModule, MatChipsModule,MatMenuModule,OwlDateTimeModule, OwlNativeDateTimeModule
        , NgxMasonryModule, MatDividerModule, MatCheckboxModule, MatTooltipModule,MatFormFieldModule,MatSnackBarModule,MatDialogModule

      ],
      providers: [SearchFilterPipe, DateTimePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
