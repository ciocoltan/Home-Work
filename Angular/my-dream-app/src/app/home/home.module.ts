import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Lesson1Component } from "./lesson1/lesson1.component";
import { Lesson2Component } from "./lesson2/lesson2.component";
import { Lesson3Component } from "./lesson3/lesson3.component";
import { MyTableComponent } from "./lesson3/my-table/my-table.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    MyTableComponent
  ],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
