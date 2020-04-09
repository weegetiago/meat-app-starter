import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { PayOption } from './../shared/pay/pay-option.model';
import { Component, OnInit } from '@angular/core';

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

  constructor(private orderService: OrderService) { }

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

  remove(item: CartItem) {
    this.orderService.remove(item)
  }

}
