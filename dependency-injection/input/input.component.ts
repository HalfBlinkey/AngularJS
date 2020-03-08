import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input ('name') name: string;
  @Input ('occupation') occupation: string;
  constructor() {
    this.name = "John Doe";
    this.occupation = "Shinobi";
  }

  ngOnInit(): void {
  }

}
