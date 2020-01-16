import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Lesson1Component } from "./home/lesson1/lesson1.component";
import { Lesson2Component } from "./home/lesson2/lesson2.component";
import { Lesson3Component } from "./home/lesson3/lesson3.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "home/lesson1",
    component: Lesson1Component
  },
  {
    path: "home/lesson2",
    component: Lesson2Component
  },
  {
    path: "home/lesson3",
    component: Lesson3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
