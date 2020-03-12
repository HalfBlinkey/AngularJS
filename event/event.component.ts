import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  counter = 0;
  mouse: string;
  upValues: string = '';
  downValues: string = '';
  keypressValues: string = "";
  x: string = "";
  y: string = '';
  view: string;

  mouseGoesIn = function () {
    this.mouse = "enterd";
  };

  mouseLeft = function () {
    this.mouse = "left";
  }

  imageArray: string[] = [
    "./assets/O-gara.jpg", "./assets/O-kakashi.jpg",
    "./assets/O-rock-lee.jpg", "./assets/O-sakara.jpg"
  ]

  imageUrl: string = this.imageArray[this.counter];
  changeImg = function () {
    if(this.counter < this.imageArray.length -1) {
      this.counter++;
    }else{
      this.counter = 0;
    }
    this.imageUrl = this.imageArray[this.counter];
  }

  onKeyup(event: any) {
    this.upValues = event.key;
  }

  onKeydown(event: any) {
    this.downValues = event.key;
  }

  keypress(event: any) {
    this.keypressValues = event.key;
  }

  move(event: any) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  underTheScope(event: any) {
    if(event.type == "focus") {
      this.view = "the text box is focused";
    }else{
      this.view = "the input box is blurred";
    }
    console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
