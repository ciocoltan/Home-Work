import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpApiRoutingModule } from "./http-api-routing.module";
import { HttpApiHomeComponent } from "./http-api-home/http-api-home.component";
import { ApihttpusersComponent } from "./apihttpusers/apihttpusers.component";
import { ApisharedModule } from "./apishared/apishared.module";
import { ApiuserdetailComponent } from './apiuserdetail/apiuserdetail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HttpApiHomeComponent, ApihttpusersComponent, ApiuserdetailComponent],
  imports: [CommonModule, HttpApiRoutingModule, ApisharedModule, ReactiveFormsModule,FormsModule]
})
export class HttpApiModule {}
