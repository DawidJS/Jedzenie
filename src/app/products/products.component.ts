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
  newProduct: Product = {
    name: '',
    kcal: 0,
  };

  constructor(private dataServices: DataService) {}

  showList() {
    this.productsList = this.dataServices.getProducts();
    console.log(this.productsList);
  }




  addList() {
    this.productsList.push(this.newProduct);
    this.dataServices.setProducts(this.productsList);
    this.newProduct = {
      name: '',
      kcal: 0
    }
  }

  removeList(product: Product){
    this.productsList = this.productsList.filter(e => e!==product);
    this.dataServices.setProducts(this.productsList);
  }

  editList(product: Product){
    this.productsList = this.productsList.filter(e => e!==product);
    this.dataServices.setProducts(this.productsList);

    this.productsList.push(product);
    this.dataServices.setProducts(this.productsList);
    console.log(this.productsList);


  }

  ngOnInit(): void {}
}
