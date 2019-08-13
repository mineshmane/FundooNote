/************************************************************************************************        
*  Purpose         : To send request to http service
* 
*  @file           : cart.service.ts
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 4-2-2019
*
*************************************************************************************************/

import { Injectable } from '@angular/core';
import{HttpService} from '../httpService/http.service'
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {


  constructor(private httpService: HttpService) { }
  /**
   * @description this service is for add the service to cart
   * @param data
   */
  addToCartService(data: object) {
    return this.httpService.postAth('productcarts/addToCart', data)
  }

  

  getService(){
    return this.httpService.getDataService("user/service")
  }


    /**
   * @description this service is for add the service to cart
   * @param data
   */
  productAddToCarts(body){
    return this.httpService.postDataService("productcarts/addToCart",body)

  }

  /**
   * @description this service is geting the cart detail
   * @param id
   */
  getCartDetails(cartId){
    return this.httpService.getDataService("productcarts/getCartDetails/"+cartId)
  }
   /**
   * @description this service is for place the order
   * 
   */
  placeOrder(body){
    return this.httpService.postData("productcarts/placeOrder",body)
  }
  myCart(){
    return this.httpService.getData("productcarts/myCart");
  }
}
