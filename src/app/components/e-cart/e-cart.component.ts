import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-e-cart',
  templateUrl: './e-cart.component.html',
  styleUrls: ['./e-cart.component.scss']
})
export class ECartComponent implements OnInit {

   isLinear = false;
 

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
   
  }

}
