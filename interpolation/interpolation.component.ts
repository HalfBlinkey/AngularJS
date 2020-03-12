import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  str1: string = "Hello my ninja rank is"
  rank: string = "Master Shinobi"
  str2: string = "I send messages through"
  likes: string[] = ['pidgeon','text', 'email']
  getLikes = function (arr: any) {
    var arrString = arr.join(", ");
    return " " + arrString
  }
  imageSrc = './assets/O-osprey.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
