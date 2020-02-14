import { Component, OnInit, Input } from "@angular/core";
import { ProductsService } from "./shared/services/products.service";
import { objectSettings } from "./shared/services/object-settings";

@Component({
  selector: "app-lesson5services",
  templateUrl: "./lesson5services.component.html",
  styleUrls: ["./lesson5services.component.scss"]
})
export class Lesson5servicesComponent implements OnInit {
  public productsService: any;
  public products: objectSettings[];
  public idValue: objectSettings;
  public nameValue: objectSettings;
  public priceValue: objectSettings;
  public categoryValue: objectSettings;

  @Input()
  valueCategory: string = "Все категории";

  constructor(private _productsServices: ProductsService) {}

  ngOnInit() {
    this.products = this._productsServices.allProducts();
    this.productsService = this._productsServices.showcategory();
  }

  selectCategory(item: string) {
    this.valueCategory = item;
  }

  deleteItem(item: number) {
    this._productsServices.delete(item);
  }
  addNewProduct() {
    this.products.push({
      id: +this.idValue,
      name: `${this.nameValue}`,
      price: +this.priceValue,
      category: +this.categoryValue
    });
    this.productsService = this._productsServices.showcategory();
  }
}
