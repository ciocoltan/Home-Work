import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor() {}
  canActivate() {
    let value = true;
    console.log("AuthGuard " + value);
    return value;
  }
}
