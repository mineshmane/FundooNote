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

  /**
   * @description this service is geting the cart detail
   * @param id
   */
  getCartDetailService(id: string) {
    // return this.httpService.httpGetWithoutToken('productcarts/getCartDetails/' + id);
  }



   /**
   * @description this service is geting the the shoping cart detail
   * 
   */
  getShopingCartDetailService() {
    // return this.httpService.httpGet('productcarts/myCart');
  }

   /**
   * @description this service is for place the order
   * 
   */
  placeOrderService(data:object) {
    // return this.httpService.postJSON('productcarts/placeOrder',data)
  }




  getService(){
    return this.httpService.getDataService("user/service")
  }
  productCarts(body){
    return this.httpService.postDataService("productcarts/addToCart",body)

  }
  getCartDetails(cartId){
    return this.httpService.getDataService("productcarts/getCartDetails/"+cartId)
  }
  placeOrder(body){
    return this.httpService.postData("productcarts/placeOrder",body)
  }
  myCart(){
    return this.httpService.getData("productcarts/myCart");
  }
}
