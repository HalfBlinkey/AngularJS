import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-exp',
  templateUrl: './class-exp.component.html',
  styleUrls: ['./class-exp.component.css']
})
export class ClassExpComponent implements OnInit {
  shinobi = 'Rock-Lee';
  village = 'Hidden in the Leaves';
  newShinobi = 'Kakashi';
  newVillage = 'Hidden in the Mist';

  upper = function(str: any){
    return str.toUppercase();
  }
  
  setValues = function(shinobi: any, village: any) {
    this.shinobi = shinobi;
    this.village = village;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
