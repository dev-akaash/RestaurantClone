import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { BadgeComponent } from "./badge/badge.component";
import { CategoryItemComponent } from "./category-item/category-item.component";
import { FoodCardComponent } from "./food-card/food-card.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule],
    exports: [SearchbarComponent, CategoryItemComponent, FoodCardComponent, BadgeComponent],
    declarations: [SearchbarComponent, CategoryItemComponent, FoodCardComponent, BadgeComponent],
})

export class ComponentsModule {}