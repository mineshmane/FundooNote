import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatProgressBarModule, MatDividerModule, MatSnackBarModule, MatDialogRef, MAT_DIALOG_DATA, MatChipsModule, MatIconModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent],
      imports: [FlexLayoutModule, RouterTestingModule, ImageCropperModule, MatProgressBarModule,
        MatDividerModule, HttpClientModule, MatSnackBarModule, Ng4LoadingSpinnerModule, MatChipsModule,
        MatIconModule, FormsModule, MatCardModule, ReactiveFormsModule, MatFormFieldModule

      ],
      providers: [SearchFilterPipe, DateTimePipe, {
        provide: MatDialogRef,
        useValue: {
          close: (dialogResult: any) => { }
        }
      }, { provide: MAT_DIALOG_DATA, useValue: {} },]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
