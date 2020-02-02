import { Injectable } from '@angular/core';
import { objectSettings } from './object-settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public categories: Array<number> ;

  constructor() {}

  public products: objectSettings[] = [
    { id: 1, name: "product 1", price: 100, category: 1, detail:" Product detail 1" },
    { id: 2, name: "product 2", price: 200, category: 3, detail: "Product detail  2"},
    { id: 3, name: "product 3", price: 300, category: 2, detail: "Product detail  3"},
    { id: 4, name: "product 4", price: 400, category: 1, detail: "Product detail  4"},
    { id: 5, name: "product 5", price: 500, category: 3, detail: "Product detail  5"},
    { id: 6, name: "product 6", price: 600, category: 1, detail: "Product detail  6"},
    { id: 7, name: "product 7", price: 700, category: 2, detail: "Product detail  7"},
    { id: 8, name: "product 8", price: 800, category: 2, detail: "Product detail  8"},
    { id: 9, name: "product 9", price: 900, category: 3, detail: "Product detail  9"},
    { id: 10, name: "product 10", price: 1000, category: 1, detail: "Product detail 10" }
  ];
  allProducts() {
    return this.products;
  }
  showcategory() {
    this.categories = this.countCategories()
    .sort((a: number, b: number) => a - b );
    return this.categories;
  }
  countCategories():Array<number> {
    let categorySet = new Set<number>();
    for (let i = 0; i < this.products.length; i++) {
      categorySet.add(this.products[i].category);
    }
    return Array.from(categorySet); // convert SET to Array
  }

  delete(item: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === item) {
        this.products.splice(i, 1);
      }
    }
  }
  sendForm(form:objectSettings){
    const productsObsevable = new Observable<objectSettings>( observer =>{ observer.next(form); });
    return productsObsevable;
  }
}
