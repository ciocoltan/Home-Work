import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-my-component",
  templateUrl: "./my-component.component.html",
  styleUrls: ["./my-component.component.scss"]
})
export class MyComponentComponent implements OnInit {
  public helloText: string = "";
  // public arr: Array<object> = [
  //   { name: "name1" },
  //   { name: "name2" },
  //   { name: "name3" }
  // ];
  public VALUES: Array<string> = [
    "Hello World",
    "Привет Мир",
    "Привіт Світ",
    "Hola Mundo",
    "Bonjour le monde",
    "Hallo Welt",
    "Ciao mondo",
    "Witaj świecie",
    "Hej världen",
    "Pozdravljen, svet",
    "Прывітанне Сусвет"
  ];
  constructor() {}

  // profileForm = new FormGroup({
  //   firstName: new FormControl(""),
  //   lastName: new FormControl("")
  // });

  ngOnInit() {
    this.helloText = "Hello";
  }
  // sayHello() {
  //   this.helloText = "Privet";
  // }
  // myFunction(item) {
  //   alert(item);
  // }
}
