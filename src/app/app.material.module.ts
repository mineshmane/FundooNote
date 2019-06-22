import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatButtonModule, MatNativeDateModule, 
        MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule} from '@angular/material';

 import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,MatToolbarModule, MatNativeDateModule,MatListModule
  
    
  ],
exports:[
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,MatToolbarModule, MatNativeDateModule,MatListModule
    

]
})
export class materialModule { }
