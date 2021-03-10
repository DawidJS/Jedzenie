
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../models/Product';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  productsList: Product[] = [];
  editMode: boolean = false;

  constructor(private dataServices: DataService) { }

  @Output()
  productSelected = new EventEmitter<Product>();

  sendProduct(parametr: Product): void {
    if (!this.editMode) this.productSelected.emit(parametr);
  }

  addProduct() {
    let newProduct = new Product();
    //szukamy nowego id
    let maxId = 0;
    for (let i = 0; i < this.productsList.length; i++) {
      let prodId = this.productsList[i].id;
      if (prodId > maxId) maxId = prodId;
    }
    newProduct.id = maxId + 1;
    this.productsList.push(newProduct);
    this.editMode = true;
  }


  removeProduct(product: Product) {
    this.productsList = this.productsList.filter(e => e !== product);
    this.dataServices.setProducts(this.productsList);
  }

  saveProducts() {
    // edytowanie produktu zapisuje poprostu cala liste jeszcze raz
    this.dataServices.setProducts(this.productsList);
    this.editMode = false;
  }

  ngOnInit(): void {
    this.productsList = this.dataServices.getProducts();
  }

  cancelEditMode() {

    this.productsList = this.dataServices.getProducts();
    this.editMode = false;
  }
}

