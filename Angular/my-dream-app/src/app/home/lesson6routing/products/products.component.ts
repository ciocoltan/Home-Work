import { Component, OnInit } from "@angular/core";
import { objectSettings } from "../../lesson5services/shared/services/object-settings";
import { ProductsService } from "../../lesson5services/shared/services/products.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  public productsService: objectSettings;
  public products: objectSettings[];

  constructor(
    private _productsServices: ProductsService,
    private router: Router,
    private routerActivated: ActivatedRoute
  ) {}

  ngOnInit() {
    this.products = this._productsServices.allProducts();
  }
  productInfo(id: number) {
    this.router.navigate(["productDetail/", id], {relativeTo: this.routerActivated});
  }
}
