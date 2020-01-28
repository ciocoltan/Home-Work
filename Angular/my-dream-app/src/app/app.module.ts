import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeModule } from "./home/home.module";
import { SharedModule } from './home/lesson5services/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HomeModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
