import { Component, OnInit } from "@angular/core";
import { objectSettings } from "./object-settings";
@Component({
  selector: "app-lesson2",
  templateUrl: "./lesson2.component.html",
  styleUrls: ["./lesson2.component.scss"]
})
export class Lesson2Component implements OnInit {
  public VALUES: objectSettings[] = [
    { value: "Hello World", language: "English" },
    { value: "Привет Мир", language: "Russian" },
    { value: "Привіт Світ", language: "Ukrainian" },
    { value: "Hola Mundo", language: "Spanish" },
    { value: "Bonjour le monde", language: "French" },
    { value: "Hallo Welt", language: "German" },
    { value: "Ciao mondo", language: "Italian" },
    { value: "Witaj świecie", language: "Polish" },
    { value: "Hej världen", language: "Swdish" },
    { value: "Pozdravljen, svet", language: "Slovenian" },
    { value: "Прывітанне Сусвет", language: "Belarusian" }
  ];

  languageList: objectSettings[] = this.VALUES;
  selectedLanguage: string;
  onSelect(selected: objectSettings){
    this.selectedLanguage = selected.language;
  }
  constructor() {}

  ngOnInit() {}
}
