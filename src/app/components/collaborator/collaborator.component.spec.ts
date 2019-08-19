import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorComponent } from './collaborator.component';

import { SearchFilterPipe } from 'src/app/pipe/search-filter.pipe';
import { DateTimePipe } from 'src/app/pipes/date-time.pipe';
import { MAT_DIALOG_DATA, MatDialogRef, MatCardModule, MatSnackBarModule } from '@angular/material';
import { AppComponent } from 'src/app/app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { materialModule } from 'src/app/app.material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('CollaboratorComponent', () => {
  let component: CollaboratorComponent;
  let fixture: ComponentFixture<CollaboratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaboratorComponent,AppComponent ],
        imports: [FlexLayoutModule, RouterTestingModule,
                  materialModule,MatCardModule, FormsModule,HttpClientModule,MatSnackBarModule
                ],
                providers: [SearchFilterPipe, DateTimePipe,
                  { provide:  MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
