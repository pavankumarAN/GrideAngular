import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = '';
  date:string = '';
  dollar:string = '';
  height:number;

  onNameChange(value:string) {
    this.name = value;
  }
  
  onDateChange(value:string) {
    this.date = value;
  }

  onDollarChange(value:string) {
    this.dollar = value;
  }

  onHeightChange(value:string) {
    this.height = parseFloat(value);
    console.log(value);
    // console.log(this.height);
    
  }
}
