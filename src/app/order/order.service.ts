import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService) { }

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  maisQtde(item: CartItem){
    this.cartService.maisQtde(item)
  }

  menosQtde(item: CartItem){
    this.cartService.menosQtde(item)
  }

  remove(item: CartItem){
    this.cartService.removeItem(item)
  }
}
