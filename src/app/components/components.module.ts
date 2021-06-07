import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { BadgeComponent } from "./badge/badge.component";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CategoryItemComponent } from "./category-item/category-item.component";
import { FoodCardComponent } from "./food-card/food-card.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule],
    exports: [SearchbarComponent, CategoryItemComponent, FoodCardComponent, BadgeComponent, CartItemComponent],
    declarations: [SearchbarComponent, CategoryItemComponent, FoodCardComponent, BadgeComponent, CartItemComponent],
})

export class ComponentsModule {}