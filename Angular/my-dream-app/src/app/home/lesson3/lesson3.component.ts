import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lesson3",
  templateUrl: "./lesson3.component.html",
  styleUrls: ["./lesson3.component.scss"]
})
export class Lesson3Component implements OnInit {
  public products: Array<Object> = [
    { id: 1, name: "product 1", price: 100 },
    { id: 2, name: "product 2", price: 200 },
    { id: 3, name: "product 3", price: 300 },
    { id: 4, name: "product 4", price: 400 },
    { id: 5, name: "product 5", price: 500 },
    { id: 6, name: "product 6", price: 600 },
    { id: 7, name: "product 7", price: 700 },
    { id: 8, name: "product 8", price: 800 },
    { id: 9, name: "product 9", price: 900 },
    { id: 10, name: "product 10", price: 1000 }
  ];
  constructor() {}

  ngOnInit() {}
  deleteItem(item: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === item) {
        this.products.splice(i, 1);
      }
      console.log(item);
    }
  }
}
