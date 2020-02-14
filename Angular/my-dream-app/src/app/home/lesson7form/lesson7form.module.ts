import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Lesson7formRoutingModule } from "./lesson7form-routing.module";
import { FormComponent } from "./form/form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [FormComponent, Page404Component],
  imports: [CommonModule, Lesson7formRoutingModule, FormsModule, ReactiveFormsModule]
})
export class Lesson7formModule {}
