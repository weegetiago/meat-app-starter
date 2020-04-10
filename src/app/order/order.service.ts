import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Order, OrderItem } from './order.model';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService,
    private http: Http) { }

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  maisQtde(item: CartItem) {
    this.cartService.maisQtde(item)
  }

  menosQtde(item: CartItem) {
    this.cartService.menosQtde(item)
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item)
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers()
    headers.append('Content-Type', 'aplication/json')
    return this.http.post(`${MEAT_API}/orders`,
      JSON.stringify(order),
      new RequestOptions({headers: headers}))
      .map(response => response.json())
  }

  clear() {
    this.cartService.clear()
  }

}
