import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home-component',
  templateUrl: './views-home-component.component.html',
  styleUrls: ['./views-home-component.component.css']
})
export class ViewsHomeComponentComponent implements OnInit {
  stats = [
    { value: 22, label: "Number of users" },
    { value: 65, label: "Height of the person" },
    { value: 43, label: "Weight of the box" }
  ];

  items = [
    {
      image: 'assets/images/couch.jpeg',
      title : 'Couch',
      description : 'Easy to sit'
    },
    {
      image: 'assets/images/dresser.jpeg',
      title : 'Dresser',
      description : 'Easy to dress'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
