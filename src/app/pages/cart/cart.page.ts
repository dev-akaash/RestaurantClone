import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItems$: Observable<CartItem[]>;
  totalAmount = 22;

  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.cartItems$ = this.cartService.getCart();
  }

  onIncrease(item: CartItem) {
    
  }

  onDecrease(item: CartItem) {

  }

  async removeFromCart(item: CartItem) {
    const alert = await this.alertCtrl.create({
      header: 'Remove',
      message: 'Are you sure want to remove this item?',
      buttons: [
        {
          text: 'Yes',
          handler: () => this.cartService.removeItem(item.id)
        },
        {
          text: 'No'
        }
      ]
    });

    alert.present();
    // this.cartService.removeItem(item.id);
  }

}
