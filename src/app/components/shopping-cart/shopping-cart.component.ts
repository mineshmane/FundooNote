/************************************************************************************************
*  Execution       : 1. default node         cmd> shopping-cart.ts 
*        
*  Purpose         :this component is for shopping cart payment place order process
* 
*  @file           : shopping-cart.ts 
*  @module         : shopping-cart.ts - This is optional if expeclictly its an npm or local package
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 8-8-2019
*
*************************************************************************************************/


import { Component, OnInit } from '@angular/core';
import { CartServiceService } from "../../services/cartService/cart-service.service";
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { placeOrder } from "../../model/cartModel";
import { DataService } from '../../services/dataService/data.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public orderModel: placeOrder;
  constructor(private cartService: CartServiceService, private snackBar: MatSnackBar, private spinnerService: Ng4LoadingSpinnerService, private dataService: DataService) { }
  cartData = [];
  DeliveryAddress = new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(8)]);
  firstStepComplete = true;
  SecondStepComplete = false;
  ThirdStepComplete = false;
  emptyCart = false;
  side = false;
  product:any;
  cartId = localStorage.getItem('cartId');
  sidnav = {
    'open': this.side,
    'close': !this.side
  }
  check = {
    'checkOutOpen': this.side,
    'checkOutClose': !this.side
  }
  ngOnInit() {
    this.getCartDetail();
    this.dataService.sideNaveMessage.subscribe(data => {
      this.side = data;
      this.sidnav.open = this.side;
      this.sidnav.close = !this.side;
      this.check.checkOutOpen = this.side;
      this.check.checkOutClose = !this.side;

    }, err => {
      console.log('err in shop', err);

    })
  }

  /**
   * @description this method is for get shoping cart detail
   * @returns nothing
   */
  getCartDetail() {
    try {
      this.spinnerService.show();

      this.cartService.myCart().subscribe(data => {
        this.spinnerService.hide();

        console.log('data after get cart detail', data);
        if (data['data'].length > 0) {
          this.cartData = data['data'][0];
          this.cartId = data['data'][0].id;
        } else {
          this.emptyCart = true;
        }
        console.log(this.cartData);

        if (this.cartData['isOrderPlaced']==true) {
          this.firstStepComplete = false;
          this.  SecondStepComplete = false;
          this.ThirdStepComplete = true;
        }

      }, err => {
        console.log('error after get cart detail', err);

      })
    } catch (error) {
      console.log('error after get cart detail', error);

    }

  }


  /**
   * @description this method is run when first step is complete procced to second step
   * @returns nothing
   */
  proceed() {
    this.firstStepComplete = false;
    this.SecondStepComplete = true;
  }
  /**
   * @description this method is for when user hit placeorder button then this method run
   * @returns nothing
   */
  placeOrder() {
    try {
      if (this.DeliveryAddress.hasError('required')) {
        this.openSnackBar('Please Enter Delivery Address ', '');
      } else if (this.DeliveryAddress.hasError('minlength')) {

        this.openSnackBar('Please Enter Correct and Valid  Address ', '');

      } else if (this.DeliveryAddress.hasError('maxlength')) {
        this.openSnackBar('Please Enter Correct and valid Address  ', '');

      } else {
        this.  SecondStepComplete = false;
        this.ThirdStepComplete = true;
        this.orderModel = new placeOrder();
        this.orderModel.address = this.DeliveryAddress.value;
        this.orderModel.cartId = this.cartId;
        this.placeOrderService(this.orderModel);
      }
    } catch (error) {
      console.log('error in place order ', error);

    }

  }
  /**
   * @description this method is for open the snackbar for display the message
   * @returns nothing
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  /**
   * @description this method is for for call the service method 
   * @returns nothing
   */
  placeOrderService(data: object) {
    this.cartService.placeOrder(data).subscribe(data => {
      console.log('data after place  order', data);
      this.openSnackBar('Your Order Placed SuccessFully ', '');
    }, error => {
      console.log('error after place  order', error);

    })
  }


}
