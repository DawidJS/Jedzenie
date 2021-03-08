import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { ProductsComponent } from './products/products.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
