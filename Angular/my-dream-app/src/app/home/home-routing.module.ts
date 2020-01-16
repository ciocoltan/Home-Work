import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AngularLessonsComponent } from "./angular-lessons/angular-lessons.component";

const routes: Routes = [
  {
    path: "",
    component: AngularLessonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
