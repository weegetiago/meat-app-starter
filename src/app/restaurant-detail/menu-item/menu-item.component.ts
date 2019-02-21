import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

import {MenuItem} from './menu-item.model'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem //precisa do input pq é uma propriedade que o compronente parent vai informar pra vc
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
