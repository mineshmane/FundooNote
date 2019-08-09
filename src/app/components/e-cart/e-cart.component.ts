import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartServiceService } from "../../services/cartService/cart-service.service";
import { placeOrder } from 'src/app/model/cartModel';

@Component({
  selector: 'app-e-cart',
  templateUrl: './e-cart.component.html',
  styleUrls: ['./e-cart.component.scss']
})
export class ECartComponent implements OnInit {

  isLinear = true;
  cartData: any;
  cartId: any;
  emptyCart: boolean;
  firstStepComplete: boolean;
  SecondStepComplete: boolean;
  orderModel: placeOrder;
  ThirdStepComplete: boolean;
  DeliveryAddress: any;


  constructor(private _formBuilder: FormBuilder, private cartService: CartServiceService) { }


  ngOnInit() {
    this.cartId = localStorage.getItem('cartId')
    this.getCartDetail()
  }

  ;

  /**
   * @description this method is for get shoping cart detail
   * @returns nothing
   */
  getCartDetail() {
    try {
      // this.spinnerService.show();
      console.log(" cartId", this.cartId);

      this.cartService.myCart().subscribe(data => {
        // this.spinnerService.hide();

        console.log('data after get cart detail', data);
        if (data['data'].length > 0) {
          this.cartData = data['data'][0];
          this.cartId = data['data'][0].id;
        } else {
          this.emptyCart = true;
        }
        console.log(this.cartData);

        // if (this.cartData['isOrderPlaced']==true) {
        //   this.firstStepComplete = false;
        //   this.SecondStepComplete = false;
        //  this.ThirdStepComplete = true;
        // }

      }, err => {
        console.log('error after get cart detail', err);

      })
    } catch (error) {
      console.log('error after get cart detail', error);

    }

  }



  /**
   * @description this method is for when user hit placeorder button then this method run
   * @returns nothing
   */
  placeOrder() {
    try {
      // if (this.DeliveryAddress.hasError('required')) {
      //   // this.openSnackBar('Please Enter Delivery Address ', '');
      // } else if (this.DeliveryAddress.hasError('minlength')) {

      //   // this.openSnackBar('Please Enter Correct and Valid  Address ', '');

      // } else if (this.DeliveryAddress.hasError('maxlength')) {
      //   // this.openSnackBar('Please Enter Correct and valid Address  ', '');

      // } else {
        // this.  SecondStepComplete = false;
        // this.ThirdStepComplete = true;
        this.orderModel = new placeOrder();
        this.orderModel.address = this.DeliveryAddress.value;
        this.orderModel.cartId = this.cartId;
        this.placeOrderService(this.orderModel);
      // }
    } catch (error) {
      console.log('error in place order ', error);

    }

  }

  /**
  * @description this method is for for call the service method 
  * @returns nothing
  */
  placeOrderService(data: object) {
    this.cartService.placeOrder(data).subscribe(data => {
      console.log('data after place  order', data);
      // this.openSnackBar('Your Order Placed SuccessFully ', '');
    }, error => {
      console.log('error after place  order', error);

    })
  }

}
