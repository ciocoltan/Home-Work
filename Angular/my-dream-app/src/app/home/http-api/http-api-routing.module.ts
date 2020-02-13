import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpApiHomeComponent } from "./http-api-home/http-api-home.component";
import { ApihttpusersComponent } from "./apihttpusers/apihttpusers.component";
import { ApiuserdetailComponent } from "./apiuserdetail/apiuserdetail.component";

const routes: Routes = [
  { path: "", redirectTo: "http", pathMatch: "full" },
  {
    path: "http",
    component: HttpApiHomeComponent,
    children: [
      { path: "", redirectTo: "users", pathMatch: "full" },
      {
        path: "users",
        component: ApihttpusersComponent,
        children: [
          { path: "userdetail", component: ApiuserdetailComponent },
          { path: "userdetail/:id", component: ApiuserdetailComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpApiRoutingModule {}
