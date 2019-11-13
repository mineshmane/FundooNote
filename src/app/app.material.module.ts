import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {  MatButtonModule,
          MatNativeDateModule,
          MatIconModule,
          MatSidenavModule,
          MatListModule,
          MatToolbarModule,
} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BarRatingModule } from "ngx-bar-rating";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatStepperModule } from '@angular/material/stepper';
@NgModule({
  imports: [
    MatIconModule,
    MatFormFieldModule, MatProgressSpinnerModule, Ng4LoadingSpinnerModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule, MatStepperModule, BrowserAnimationsModule,
    MatDialogModule, BarRatingModule,
    MatSidenavModule, MatToolbarModule, MatNativeDateModule,
    MatListModule, MatMenuModule, MatDatepickerModule, MatTooltipModule,
    MatCheckboxModule, MatChipsModule, MatGridListModule, MatProgressBarModule, MatSelectModule, MatTabsModule, MatButtonToggleModule

  ],
  exports: [
    MatIconModule,
    MatFormFieldModule, MatStepperModule, BarRatingModule,
    MatInputModule, BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule, MatProgressSpinnerModule, Ng4LoadingSpinnerModule,
    MatSidenavModule, MatToolbarModule, MatNativeDateModule, MatListModule,
    MatMenuModule, MatDatepickerModule, MatTooltipModule, MatCheckboxModule, MatChipsModule, MatButtonToggleModule,
    MatGridListModule, MatSelectModule, MatTabsModule, MatProgressBarModule


  ]
})
export class materialModule { }
