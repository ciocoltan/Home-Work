import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyComponentComponent } from "./my-component/my-component.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [AppComponent, MyComponentComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
