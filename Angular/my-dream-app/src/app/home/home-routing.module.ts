import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Lesson1Component } from "./lesson1/lesson1.component";
import { Lesson2Component } from "./lesson2/lesson2.component";
import { Lesson3Component } from "./lesson3/lesson3.component";
import { Lesson4Component } from "./lesson4/lesson4.component";
import { Lesson5servicesComponent } from "./lesson5services/lesson5services.component";
import { Lesson6routingComponent } from "./lesson6routing/lesson6routing.component";
import { HomeComponent } from "./lesson6routing/home/home.component";
import { ProductsComponent } from "./lesson6routing/products/products.component";
import { ProductdetailsComponent } from "./lesson6routing/productdetails/productdetails.component";
import { ProductIdService } from "./lesson6routing/shared/product-id.service";
import { AuthGuardService } from "./lesson6routing/shared/auth-guard.service";
import { AdminHomeComponent } from "./lesson6routing/admin/admin-home/admin-home.component";
import { Page404Component } from "./lesson7form/page404/page404.component";
import { FormComponent } from "./lesson7form/form/form.component";

const routes: Routes = [
  { path: "lesson1", component: Lesson1Component },
  { path: "lesson2", component: Lesson2Component },
  { path: "lesson3", component: Lesson3Component },
  { path: "lesson4", component: Lesson4Component },
  { path: "lesson5", component: Lesson5servicesComponent },
  {
    path: "lesson6",
    component: Lesson6routingComponent, // <router-outlet>
    children: [
      {
        path: "",
        children: [
          { path: "", redirectTo: "home", pathMatch: "full" },
          { path: "home", component: HomeComponent },
          {
            path: "admin",
            component: AdminHomeComponent,
            canActivate: [AuthGuardService]
          },
          {
            path: "products",
            component: ProductsComponent, // <router-outlet>
            children: [
              {
                path: "productDetail/:id",
                component: ProductdetailsComponent,
                resolve: {
                  productId: ProductIdService
                }
              },
              { path: "productDetail", component: ProductdetailsComponent }
            ]
          }
        ]
      }
    ]
  },
  { path: "lesson7", component: FormComponent },
  { path: "**", redirectTo: "not-found" },
  { path: "not-found", component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
