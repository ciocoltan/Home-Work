import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Lesson6routingRoutingModule } from "./lesson6routing-routing.module";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { AdminHomeComponent } from "./admin/admin-home/admin-home.component";

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ProductdetailsComponent,
    AdminHomeComponent
  ],
  imports: [CommonModule, Lesson6routingRoutingModule]
})
export class Lesson6routingModule {}
