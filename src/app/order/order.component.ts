import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { PayOption } from './../shared/pay/pay-option.model';
import {Order, OrderItem} from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: PayOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão', value: 'CRD' },
    { label: 'Cartão Refeição', value: 'REF' },
  ]

  constructor(
    private orderService: OrderService,
    private router: Router){}

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems() {
    return this.orderService.cartItems()
  }

  maisQtde(item: CartItem) {
    this.orderService.maisQtde(item)
  }

  menosQtde(item: CartItem) {
    this.orderService.menosQtde(item)
  }

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
    .map((item:CartItem)=>new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order)
    .subscribe((orderId: string) => {
      this.router.navigate(['order-summary'])
      console.log(`Compra conluída: ${orderId}`)
      this.orderService.clear()
    })

    console.log(order)
  }

  remove(item: CartItem) {
    this.orderService.remove(item)
  }

}
