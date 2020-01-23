import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Lesson1Component } from "./lesson1/lesson1.component";
import { Lesson2Component } from "./lesson2/lesson2.component";
import { Lesson3Component } from "./lesson3/lesson3.component";

const routes: Routes = [
  { path: "home/lesson1", component: Lesson1Component },
  { path: "home/lesson2", component: Lesson2Component },
  { path: "home/lesson3", component: Lesson3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
