import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { objectSettings } from "../../lesson5services/shared/services/object-settings";
import { ProductsService } from "../../lesson5services/shared/services/products.service";

@Injectable({
  providedIn: "root"
})
export class ProductIdService implements Resolve<string> {
  public products: objectSettings[];

  constructor(private _productService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.products = this._productService.allProducts();
    if (route) {
      return this.products[route.params["id"] - 1].detail;
    }
  }
}
