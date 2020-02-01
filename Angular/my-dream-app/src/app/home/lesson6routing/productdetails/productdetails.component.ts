import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-productdetails",
  templateUrl: "./productdetails.component.html",
  styleUrls: ["./productdetails.component.scss"]
})
export class ProductdetailsComponent implements OnInit {
  public productDetail: string;
  constructor(
    private routerActivated: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.routerActivated.data.forEach(data => {
      this.productDetail = data.productId;
    });
  }

  back() {
    this.router.navigate(["../../"], { relativeTo: this.routerActivated });
  }
}
