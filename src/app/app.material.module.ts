import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {
  MatButtonModule, MatNativeDateModule,
  MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,
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
    MatSidenavModule, MatToolbarModule, MatNativeDateModule, 
    MatListModule, MatMenuModule, MatDatepickerModule,MatTooltipModule,MatCheckboxModule,MatChipsModule


  ],
  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule, MatToolbarModule, MatNativeDateModule, MatListModule, 
    MatMenuModule, MatDatepickerModule,MatTooltipModule,MatCheckboxModule,MatChipsModule


  ]
})
export class materialModule { }
