import { Injectable } from "@angular/core";
import { objectSettings } from "./object-settings";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  public categories;

  constructor() {}

  public products: objectSettings[] = [
    { id: 1, name: "product 1", price: 100, category: 1 },
    { id: 2, name: "product 2", price: 200, category: 3 },
    { id: 3, name: "product 3", price: 300, category: 2 },
    { id: 4, name: "product 4", price: 400, category: 1 },
    { id: 5, name: "product 5", price: 500, category: 3 },
    { id: 6, name: "product 6", price: 600, category: 1 },
    { id: 7, name: "product 7", price: 700, category: 2 },
    { id: 8, name: "product 8", price: 800, category: 2 },
    { id: 9, name: "product 9", price: 900, category: 3 },
    { id: 10, name: "product 10", price: 1000, category: 1 }
  ];
  allProducts() {
    return this.products;
  }
  showcategory() {
    this.categories = this.countCategories().sort(
      (a: number, b: number) => a - b
    );
    console.log(this.countCategories().sort((a: number, b: number) => a - b));

    return this.categories;
  }
  countCategories() {
    let categorySet = new Set();
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
}
