import { Component, OnInit, OnDestroy, OnChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserModel } from "../apishared/models/UserModel";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ApihttpuserService } from "../apishared/apiservices/apihttpuser.service";
import { UsersResponseModel } from "../apishared/models/UsersResponse";

@Component({
  selector: "app-apiuserdetail",
  templateUrl: "./apiuserdetail.component.html",
  styleUrls: ["./apiuserdetail.component.scss"]
})
export class ApiuserdetailComponent implements OnInit, OnChanges {
  public curentUser: UsersResponseModel;
  public id: number;
  public userDetail: any;
  public formAddUser: FormGroup;
  private unSubscribe: Subscription = new Subscription();
  private controlCode: UsersResponseModel;
  public statusUser: Array<string> = ["active", "inactive"];
  public genderUser: Array<string> = ["male", "female"];

  formError = {
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    status: ""
  };
  validationMassege = {
    first_name: {
      required: "Обязательное поле.",
      minlength: " Значение должно быть не менее 4х символов."
    },
    last_name: {
      required: "Обязательное поле.",
      minlength: " Значение должно быть не менее 4х символов."
    },
    gender: {
      required: "Обязательное поле."
    },
    email: {
      required: "Обязательное поле.",
      email: "Неверно введен электронный емайл."
    }
  };

  constructor(
    private fb: FormBuilder,
    private _userservice: ApihttpuserService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.getCurrentUser();
  }

  ngOnInit() {
    this.formUser();
  }

  ngOnChanges() {
    //this.formUser();
  }

  getCurrentUser() {
    this.activateRoute.params.forEach(params => {
      if (params["id"]) {
        this.id = params["id"];
        this._userservice.getUser(this.id).subscribe(res => {
          this.userDetail = res.result;
          console.log(res);
          console.log(this.userDetail.id);
        });
      }
    });
    return true;
  }
  formUser() {
    // this.getCurrentUser();
    //console.log("form");

    console.log("form " + this.userDetail);

    this.formAddUser = this.fb.group({
      id: [] //[this.userDetail.id]
      // first_name: [
      //   `${this.userDetail.first_name}`,
      //   [Validators.compose([Validators.minLength(4), Validators.required])]
      // ],
      // last_name: [
      //   this.userDetail.last_name,
      //   [Validators.minLength(4), Validators.required]
      // ],
      // gender: [this.userDetail.gender, [Validators.required]],
      // email: [this.userDetail.email, [Validators.required, Validators.email]],
      // status: [this.userDetail.status, [Validators.required]]
    });
    this.unSubscribe.add(
      this.formAddUser.valueChanges.subscribe(() => this.onValueChange())
    );
  }

  onValueChange() {
    // let form = this.formAddUser;
    // for (let item in this.formError) {
    //   this.formError[item] = "";
    //   let control = form.get(item);
    //   if (!control.valid) {
    //     let message = this.validationMassege[item];
    //     for (let key in control.errors) {
    //       this.formError[item] += message[key];
    //     }
    //   }
    // }
  }
  editUser() {
    // this.unSubscribe.add(
    //   this._userservice
    //     .editForm(this.formAddUser.value.id, this.formAddUser.value)
    //     .subscribe(res => {
    //       this.userPush();
    //       this.controlCode = res;
    //       if (this.controlCode._meta.code == 200) {
    //         alert(this.controlCode._meta.message);
    //       } else {
    //         alert(
    //           ` Please chage value on Email, this email exists to another user, ${this.controlCode._meta.message}`
    //         );
    //       }
    //     })
    // );
  }
  deleteUser() {
    // if (confirm("You are sure you want to delete it ?")) {
    //   this.unSubscribe.add(
    //     this._userservice
    //       .deleteUser(this.formAddUser.value.id)
    //       .subscribe(res => {
    //         this.controlCode = res;
    //         if (this.controlCode._meta.code == 204) {
    //           alert(this.controlCode._meta.message);
    //           //window.location.reload();
    //         } else {
    //           alert(this.controlCode._meta.message);
    //         }
    //       })
    //   );
    // } else {
    //   return;
    // }
    // this.router.navigate(["../../"], { relativeTo: this.activateRoute });
  }

  addNewUser() {
    // this.unSubscribe.add(
    //   this._userservice.sendForm(this.formAddUser.value).subscribe(res => {
    //     this.userPush();
    //     this.controlCode = res;
    //     if (this.controlCode._meta.code == 200) {
    //       alert(this.controlCode._meta.message);
    //       //window.location.reload();
    //     } else {
    //       alert(
    //         ` Please chage value on Email, this email exists to another user, ${this.controlCode._meta.message}`
    //       );
    //     }
    //   })
    // );
  }
  userPush() {
    // (this.userDetail.first_name = `${this.formAddUser.value.first_name}`),
    //   (this.userDetail.last_name = this.formAddUser.value.last_name),
    //   (this.userDetail.gender = this.formAddUser.value.gender),
    //   (this.userDetail.email = this.formAddUser.value.email),
    //   (this.userDetail.status = this.formAddUser.value.status);
  }
  // ngOnDestroy() {
  //   this.unSubscribe.unsubscribe();
  //   console.log("unsubscibe");
  // }
}
