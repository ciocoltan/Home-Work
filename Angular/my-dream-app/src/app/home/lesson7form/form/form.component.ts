import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { objectSettings } from "../shared/services/object-settings";
import { ProductsService } from "../shared/services/products.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit, OnDestroy {
  public productsService: any;
  public products: objectSettings[];
  public formAddItem: FormGroup;
  private unSubscribe: Subscription = new Subscription();

  formError = {
    id: "",
    name: "",
    price: "",
    category: ""
  };
  validationMassege = {
    id: {
      required: "Обязательное поле.",
      maxlength: "Значение не должно быть больше 3 символов.",
      pattern: " Значение должно быть целым числом."
    },
    name: {
      required: "Обязательное поле.",
      minlength: " Значение должно быть не менее 4х символов."
    },
    price: {
      required: "Обязательное поле.",
      pattern: " Значение должно быть целым числом."
    },
    category: {
      required: "Обязательное поле.",
      pattern: " Значение должно быть целым числом."
    }
  };
  @Input()
  valueCategory: string = "Все категории";

  constructor(
    private _productsServices: ProductsService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.products = this._productsServices.allProducts();
    this.productsService = this._productsServices.showcategory();
    this.formProducts();
  }

  formProducts() {
    this.formAddItem = this.fb.group({
      id: [
        this.products.length + 1,
        [
          Validators.required,
          Validators.maxLength(3),
          Validators.pattern("\\d+")
        ]
      ],
      name: [
        `${this.products[this.products.length - 1].name}`,
        [Validators.compose([Validators.minLength(4), Validators.required])]
      ],
      price: [
        this.products[this.products.length - 1].price,
        [Validators.required, Validators.pattern("\\d+")]
      ],
      category: [
        this.products[this.products.length - 1].category,
        [Validators.required, Validators.pattern("\\d+")]
      ]
    });
    this.unSubscribe.add(
      this.formAddItem.valueChanges.subscribe(() => this.onValueChange())
    );
    this.onValueChange();
  }

  onValueChange() {
    let form = this.formAddItem;
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
  selectCategory(item: string) {
    this.valueCategory = item;
  }

  deleteItem(item: number) {
    this._productsServices.delete(item);
  }
  addNewProduct() {
    this.unSubscribe.add(
      this._productsServices.sendForm(this.formAddItem.value).subscribe(() => {
        this.productPush();
      })
    );
    this.productsService = this._productsServices.showcategory();
  }
  productPush() {
    this.products.push({
      id: +this.formAddItem.value.id,
      name: `${this.formAddItem.value.name}`,
      price: +this.formAddItem.value.price,
      category: +this.formAddItem.value.category,
      detail: ``
    });
    console.log(this.products);
  }
  ngOnDestroy() {
    this.unSubscribe.unsubscribe();
    console.log("unsubscibe");
  }
}
