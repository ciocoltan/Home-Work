import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lesson2",
  templateUrl: "./lesson2.component.html",
  styleUrls: ["./lesson2.component.scss"]
})
export class Lesson2Component implements OnInit {
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

  ngOnInit() {}
}
