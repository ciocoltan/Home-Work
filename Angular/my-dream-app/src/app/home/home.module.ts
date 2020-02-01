import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Lesson1Component } from "./lesson1/lesson1.component";
import { Lesson2Component } from "./lesson2/lesson2.component";
import { Lesson3Component } from "./lesson3/lesson3.component";
import { MyTableComponent } from "./lesson3/my-table/my-table.component";
import { HomeRoutingModule } from "./home-routing.module";
import { Lesson4Component } from "./lesson4/lesson4.component";
import { FormsModule } from "@angular/forms"; // ngModel
import { Lesson5servicesComponent } from "./lesson5services/lesson5services.component";
import { Lesson6routingComponent } from "./lesson6routing/lesson6routing.component";
import { Lesson6routingModule } from "./lesson6routing/lesson6routing.module";

@NgModule({
  declarations: [
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    MyTableComponent,
    Lesson4Component,
    Lesson5servicesComponent,
    Lesson6routingComponent
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, Lesson6routingModule],
  providers: []
})
export class HomeModule {}
