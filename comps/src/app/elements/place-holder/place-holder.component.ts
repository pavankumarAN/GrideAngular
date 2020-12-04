import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.css']
})
export class PlaceHolderComponent implements OnInit {
  @Input() header = true;
  @Input() lines = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
