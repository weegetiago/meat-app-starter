import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartItem } from './../../restaurant-detail/shopping-cart/cart-item.model';


@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[]

  @Output() maisQtde = new EventEmitter<CartItem>()
  @Output() menosQtde = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitMaisQtde(item: CartItem){
    this.maisQtde.emit(item)
  }

  emitMenosQtde(item: CartItem){
    this.menosQtde.emit(item)
  }

  emitRemove(item: CartItem){
    this.remove.emit(item)
  }

}
