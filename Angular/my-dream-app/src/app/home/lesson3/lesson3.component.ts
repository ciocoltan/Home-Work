import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-lesson3",
  templateUrl: "./lesson3.component.html",
  styleUrls: ["./lesson3.component.scss"]
})
export class Lesson3Component implements OnInit {
  constructor() {}

  ngOnInit() {}
  deleteProduct(item) {
    console.log(item);
  }
}
