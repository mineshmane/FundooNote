import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectServiceComponent } from './select-service.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatIconModule, MatChipsModule, MatDividerModule, MatTooltipModule, MatMenuModule, MatCheckboxModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatToolbarModule } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxMasonryModule } from 'ngx-masonry';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { AskQuestionsComponent } from '../ask-questions/ask-questions.component';
import { LikeComponent } from '../like/like.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

describe('SelectServiceComponent', () => {
  let component: SelectServiceComponent;
  let fixture: ComponentFixture<SelectServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectServiceComponent,AskQuestionsComponent,LikeComponent,StarRatingComponent],
      imports: [FlexLayoutModule, RouterTestingModule, MatCardModule, Ng4LoadingSpinnerModule, MatIconModule,
        MatChipsModule, MatDividerModule, NgxMasonryModule, MatTooltipModule, MatMenuModule, OwlDateTimeModule,
        MatCheckboxModule, ReactiveFormsModule, FormsModule, HttpClientModule, MatSnackBarModule,
        MatFormFieldModule, BrowserAnimationsModule, MatToolbarModule,
        MatInputModule, MatDialogModule,BarRatingModule,FroalaEditorModule,FroalaViewModule

      ],
      providers: [SearchFilterPipe, DateTimePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
