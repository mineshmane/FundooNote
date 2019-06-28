import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

import {
  MatButtonModule, MatNativeDateModule,
  MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule
} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatSidenavModule, MatToolbarModule, MatNativeDateModule, MatListModule, MatMenuModule, MatDatepickerModule,MatTooltipModule,


  ],
  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule, MatToolbarModule, MatNativeDateModule, MatListModule, MatMenuModule, MatDatepickerModule,MatTooltipModule,


  ]
})
export class materialModule { }
