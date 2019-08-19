import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryComponent } from './masonry.component';
import { DisplayComponent } from '../components/display/display.component';
import { IconComponent } from '../components/icon/icon.component';
import { SearchFilterPipe } from '../pipe/search-filter.pipe';
import { DateTimePipe } from '../pipes/date-time.pipe';
import { MatCardModule, MatIconModule, MatChipsModule, MatMenuModule, MatDividerModule, MatCheckboxModule, MatTooltipModule, MatFormFieldModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxMasonryModule } from 'ngx-masonry';

describe('MasonryComponent', () => {
  let component: MasonryComponent;
  let fixture: ComponentFixture<MasonryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonryComponent,DisplayComponent,IconComponent,SearchFilterPipe, DateTimePipe],
        imports: [MatCardModule, RouterTestingModule, Ng4LoadingSpinnerModule,FormsModule,HttpClientModule,
          MatIconModule, MatChipsModule,MatMenuModule,OwlDateTimeModule, OwlNativeDateTimeModule
         , NgxMasonryModule, MatDividerModule, MatCheckboxModule, MatTooltipModule,MatFormFieldModule,MatSnackBarModule,MatDialogModule
                ],
                providers: [SearchFilterPipe, DateTimePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
