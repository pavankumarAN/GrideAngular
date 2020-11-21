import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myPass = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length=0;
  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  } 
  handleInputLength(value:string) {
    console.log(value);
    console.log(typeof(value));
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
    
  }
  onPwClick() {
    // console.log(this.includeLetters);
    // console.log(this.includeNumbers);
    // console.log(this.includeSymbols);
    // this.myPass = "My Password";
    // console.log(`Password generate button clicked`);
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";
    let validChars = '';

    if(this.includeLetters) {
      validChars+=letters;
    }
    if(this.includeNumbers) {
      validChars+=numbers;
    }
    if(this.includeSymbols) {
      validChars+=symbols;
    }

    let generatedPassword = '';
    for(let i=0; i<this.length;i++) {
      generatedPassword += validChars[Math.floor(Math.random()*validChars.length)];
    }
    this.myPass = generatedPassword;
  }
  title = 'pwgenerator';
  

}
