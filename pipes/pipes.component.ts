import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  today = Date.now();
  jsonObject = [{title : "Will of Fire"},{title : "BLood Prison"}];
  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',
          'Saturday']
  constructor() {
  }

  ngOnInit(): void {
  }

}
