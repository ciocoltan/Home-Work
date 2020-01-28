import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Lesson1Component } from "./lesson1/lesson1.component";
import { Lesson2Component } from "./lesson2/lesson2.component";
import { Lesson3Component } from "./lesson3/lesson3.component";
import { Lesson4Component } from "./lesson4/lesson4.component";
import { Lesson5servicesComponent } from "./lesson5services/lesson5services.component";

const routes: Routes = [
  { path: "home/lesson1", component: Lesson1Component },
  { path: "home/lesson2", component: Lesson2Component },
  { path: "home/lesson3", component: Lesson3Component },
  { path: "home/lesson4", component: Lesson4Component },
  { path: "home/lesson5", component: Lesson5servicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
