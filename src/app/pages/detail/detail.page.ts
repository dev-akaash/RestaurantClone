import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: number;
  food: Food;

  constructor(
    private activaRoute: ActivatedRoute, 
    private foodService: FoodService,
    private cartService: CartService,
    private commonService: CommonService
  ) {
    this.id = +this.activaRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.food = this.foodService.getFood(this.id);
  }

  addItemToCart() {
    const cartItem: CartItem = {
      id: this.food.id,
      name: this.food.title,
      price: this.food.price,
      image: this.food.image,
      quantity: 1
    };

    this.cartService.addToCart(cartItem);
    this.commonService.showToast('Food added to cart!');
  }

}
