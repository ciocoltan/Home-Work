import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApihttpuserService } from "../apishared/apiservices/apihttpuser.service";
import { UserModel } from "../apishared/models/UserModel";
import { Subscription } from "rxjs";

@Component({
  selector: "app-apihttpusers",
  templateUrl: "./apihttpusers.component.html",
  styleUrls: ["./apihttpusers.component.scss"]
})
export class ApihttpusersComponent implements OnInit, OnDestroy {
  public users: Array<UserModel>;
  // public curentUser: UserModel;
  private unSubscribe: Subscription = new Subscription();
  constructor(
    private _apiUserServices: ApihttpuserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.showUsers();
  }
  showUsers() {
    this.unSubscribe.add(
      this._apiUserServices.getUsers().subscribe(res => {
        this.users = res.result;
      })
    );
  }

  selectIdUser(id: number) {
    this.router.navigate(["userdetail/", id], {
      relativeTo: this.activatedRoute
    });
  }

  ngOnDestroy() {
    this.unSubscribe.unsubscribe();
    console.log("unsubscibe");
  }
}
