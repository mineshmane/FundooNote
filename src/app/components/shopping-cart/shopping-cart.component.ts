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
  public placeOrderModel: placeOrder;
  constructor(private cartService: CartServiceService, private snackBar: MatSnackBar, private spinnerService: Ng4LoadingSpinnerService, private dataService: DataService) { }
  cartData = [];
  Delivery = new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(10)]);
  firstComplete = true;
  SecondComplete = false;
  ThirdComplete = false;
  firstDisplay = false;
  side = false;
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
          this.firstDisplay = true;
        }
        console.log(this.cartData);

        if (this.cartData['isOrderPlaced']) {
          this.firstComplete = false;
          this.SecondComplete = false;
          this.ThirdComplete = true;
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
    this.firstComplete = false;
    this.SecondComplete = true;
  }
  /**
   * @description this method is for when user hit placeorder button then this method run
   * @returns nothing
   */
  placeOrder() {
    try {
      if (this.Delivery.hasError('required')) {
        this.openSnackBar('Please Enter Delivery Address ', '');
      } else if (this.Delivery.hasError('minlength')) {

        this.openSnackBar('Please Enter Correct Address ', '');

      } else if (this.Delivery.hasError('maxlength')) {
        this.openSnackBar('Please Enter Correct Address ', '');

      } else {
        this.SecondComplete = false;
        this.ThirdComplete = true;
        this.placeOrderModel = new placeOrder();
        this.placeOrderModel.address = this.Delivery.value;
        this.placeOrderModel.cartId = this.cartId;
        this.placeOrderService(this.placeOrderModel);
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
      console.log('data after place order', data);
      this.openSnackBar('Your Order Placed SuccessFully ', '');
    }, err => {
      console.log('error after place order', err);

    })
  }


}
