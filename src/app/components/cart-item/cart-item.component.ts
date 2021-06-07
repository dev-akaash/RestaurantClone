import { Component, Input, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {

  @Input() item: CartItem;
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();

  constructor() {
    // this.item = {
    //   id: 2,
    //   name: 'Hamburger',
    //   price: 21,
    //   image: 'assets/images/foods/hamburger.png',
    //   quantity: 1
    // }
  }

}
