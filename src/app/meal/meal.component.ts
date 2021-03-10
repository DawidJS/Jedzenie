import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from '../models/Dish';
import { Product } from '../models/Product';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.less'],
})
export class MealComponent implements OnInit {
  @Input() // bedzie dawał rodzicowi mozliwosc dzialania na bindingu, to rodzic bedzie tu przysylal dane
  meal: Dish[] = [];
  
  @Output()
  removeDish = new EventEmitter<Dish>();

  // addProduct
  constructor() { }

  ngOnInit(): void { }


  getKCal(): number {
    let kcal = 0;
    for (let i = 0; i < this.meal.length; i++) {
      let m = this.meal[i];
      kcal += m.product.kcal * m.count;
    }
    return kcal;
  }


}

