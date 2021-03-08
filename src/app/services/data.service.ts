import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  list: Product[] = [
    { name: 'Jajko', kcal: 200 },
    {
      name: 'Kukurydza',
      kcal: 300,
    },
  ];

  newList = [];

  constructor() {}

  getProducts(): Product[] {
    let products = localStorage.getItem('productList');
    if (products != null) return JSON.parse(products);
    return this.list;
  }

  setProducts(e: Product[]): void {
    localStorage.setItem('productList', JSON.stringify(e));
  }
}
