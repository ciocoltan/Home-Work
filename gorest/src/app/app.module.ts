import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {BreadcrumbModule} from 'angular-crumbs';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { JwtInterceptor } from "./shared/interceptor/httpInterceptor";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { SharedModule } from "./shared/shared.module";

import { JwPaginationComponent } from "jw-angular-pagination";
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    JwPaginationComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule,BreadcrumbModule, ReactiveFormsModule,FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
