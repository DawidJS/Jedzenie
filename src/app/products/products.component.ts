import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
})
export class ProductsComponent implements OnInit {
  productsList: Product[] = [];

  constructor(private dataServices: DataService) {}

  showList() {
    this.productsList =  this.dataServices.getProducts();
    console.log(this.productsList);
  }

  sendList(name: string, kcal:number) {
    this.dataServices.setProducts();
  }

  ngOnInit(): void {}
}
