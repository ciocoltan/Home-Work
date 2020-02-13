import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserModel } from "../shared/models/UserModel";
import { ApiServicesService } from "../shared/services/api-services.service";
import { Subscription } from "rxjs";
import { FormError } from "../shared/obj/formError";
import { UsersObjResModel } from "../shared/models/UsersObjResModel";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"]
})
export class UpdateComponent implements OnInit, OnDestroy {
  public formHtmlUpdate: FormGroup;
  public users: UserModel;
  private unSubscribe: Subscription = new Subscription();
  private controlCode: UsersObjResModel;
  public h3Text: string;
  public btnText: string;
  public id: string;

  public statusUser: Array<string> = ["active", "inactive"];
  public genderUser: Array<string> = ["male", "female"];
  public formError = new FormError();
  public validationMassege = {
    first_name: {
      required: "Обязательное поле.",
      minlength: " Значение должно быть не менее 3х символов."
    },
    last_name: {
      required: "Обязательное поле.",
      minlength: " Значение должно быть не менее 3х символов."
    },
    dob: {
      required: "Обязательное поле."
    },
    phone: { required: "Обязательное поле." },
    email: {
      required: "Обязательное поле.",
      email: "Неверно введен электронный емайл."
    },
    website: { required: "Обязательное поле." },
    address: { required: "Обязательное поле." }
  };

  constructor(
    private fb: FormBuilder,
    private _apiServices: ApiServicesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.checkUrl();
  }

  formUpdateUser(id: string) {
    this.unSubscribe.add(
      this._apiServices.getUser(id).subscribe(res => {
        this.users = res.result;
        this.formHtmlUpdate = this.fb.group({
          first_name: [
            `${this.users.first_name}`,
            [Validators.compose([Validators.minLength(3), Validators.required])]
          ],
          last_name: [
            this.users.last_name,
            [Validators.minLength(3), Validators.required]
          ],
          gender: [this.users.gender, [Validators.required]],
          dob: [this.users.dob, [Validators.required]],
          phone: [this.users.phone, [Validators.required]],
          status: [this.users.status, [Validators.required]],
          email: [this.users.email, [Validators.required, Validators.email]],
          website: [this.users.website, [Validators.required]],
          // avatar: [this.users[0].avatar, [Validators.required]],
          // about: [this.users[0].about, [Validators.required]],
          address: [this.users.address, [Validators.required]]
        });
        this.unSubscribe.add(
          this.formHtmlUpdate.valueChanges.subscribe(() => {
            this.onValueChange();
          })
        );
      })
    );
  }
  onValueChange() {
    let form = this.formHtmlUpdate;
    for (let item in this.formError) {
      this.formError[item] = "";
      let control = form.get(item);
      if (!control.valid) {
        let message = this.validationMassege[item];
        for (let key in control.errors) {
          this.formError[item] += message[key];
        }
      }
    }
  }
  checkUrl() {
    this.activatedRoute.params.forEach(params => {
      this.id = params.id;
      if (this.id) {
        this.formUpdateUser(this.id);
        this.h3Text = `Update User:`; //${this.users.first_name} ${this.users.last_name} `;
        this.btnText = "Update User";
      } else {
        this.unSubscribe.add(
          this._apiServices.getUsers().subscribe(res => {
            this.formUpdateUser(res.result[0].id);
          })
        );
        this.h3Text = "Add New User";
        this.btnText = "Add User";
      }
    });
  }

  addNewUser() {
    if (this.id) {
      this.editForm();
    } else {
      this.newUser();
    }
  }

  editForm() {
    this.unSubscribe.add(
      this._apiServices
        .editForm(this.id, this.formHtmlUpdate.value)
        .subscribe(res => {
          this.responseControl(res);
        })
    );
  }

  newUser() {
    this.unSubscribe.add(
      this._apiServices.sendForm(this.formHtmlUpdate.value).subscribe(res => {
        this.responseControl(res);
      })
    );
  }

  responseControl(res: UsersObjResModel) {
    this.controlCode = res;
    if (this.controlCode._meta.code == 200) {
      alert(this.controlCode._meta.message);
      this.sentUserId(this.controlCode.result.id);
    }else if(this.controlCode._meta.code == 422){
      alert(
        ` User must have atleast 11 year, ${this.controlCode._meta.message}`
      );
    }
     else {
      alert(
        ` Please chage value on Email, this email exists to another user, ${this.controlCode._meta.message}`
      );
    }
  }

  sentUserId(id: string) {
      this.router.navigate(["home/users/view/", id]);
  }

  ngOnDestroy() {
    this.unSubscribe.unsubscribe();
    console.log("unsubscibe");
  }
}
