import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { AngularLessonsComponent } from "./angular-lessons/angular-lessons.component";
import { Lesson1Component } from "./lesson1/lesson1.component";
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';

@NgModule({
  declarations: [AngularLessonsComponent, Lesson1Component, Lesson2Component, Lesson3Component],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
