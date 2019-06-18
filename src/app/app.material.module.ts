import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';


 import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
    
  
    
  ],
exports:[
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
    
    

]
})
export class materialModule { }
