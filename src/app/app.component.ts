import { Component } from '@angular/core';
import { __values } from 'tslib';
import { Dish } from './models/Dish';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  meal: Dish[] = [];

  addPoductToMeal(product: Product): void {
    console.log(product);
    let dish = this.meal.find(d => d.product.id == product.id);
    if (dish) dish.count += 1;
    else {
      dish = new Dish();
      dish.count = 1;
      dish.product = product;
      this.meal.push(dish);
    }
  }

  removeDishFromMeal(dish: Dish) {
    if (dish.count > 1) dish.count -= 1;
    else {
      this.meal = this.meal.filter(d => d.product.id != dish.product.id);
    }
  }

}
