import { Component, OnInit, } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typechallengecard',
  templateUrl: './typechallengecard.component.html',
  styleUrls: ['./typechallengecard.component.css']
})
export class TypechallengecardComponent implements OnInit {
  randomText: string = lorem.sentence();
  enteredText = '';
  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: string) {
    this.enteredText = value;
  }

  compareChar(randomLetter:string, enteredLetter:string) {
    if(!enteredLetter) {
     return 'pending';
    }
    return randomLetter===enteredLetter ? 'correct':'incorrect';
  }

}
