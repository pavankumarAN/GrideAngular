import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {
      name: "Pavan", age: 25, job: "Software Developer"
    },
    {
      name: "Vinay", age: 26, job: "Civil Engineer"
    },
    {
      name: "Swamy", age: 26, job: "Mechanical Engineer"
    }
  ];

  headers = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "job", label: "Job" }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
