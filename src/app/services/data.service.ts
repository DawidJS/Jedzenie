import { Injectable } from '@angular/core';
import { Product } from '../models/Product';



const productsFile: Product[] = [
  { id: 0, name: 'Jajko', kcal: 200 },
  { id: 1,
    name: 'Kukurydza',
    kcal: 300,
  },
];

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() {}

  getProducts(): Product[] {
    let products = localStorage.getItem('productList');
    if (products != null) return JSON.parse(products);
    return productsFile;
  }

  setProducts(e: Product[]) {
    localStorage.setItem('productList', JSON.stringify(e));
  }
}