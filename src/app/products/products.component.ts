
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
    this.productsList.push(new Product());
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

