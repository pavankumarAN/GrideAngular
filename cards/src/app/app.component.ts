import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageUrl : 'assets/tree.jpeg',
      username: 'Pavan',
      content: 'I saw this tree during my morning walk'
    },
    {
      title: 'Big Mountain',
      imageUrl : 'assets/mountain.jpeg',
      username: 'Naveen',
      content: 'I saw this huge mountain during my interstate trip'
    },
    {
      title: 'Cycling',
      imageUrl : 'assets/biking.jpeg',
      username: 'Raju',
      content: 'I love cycling to save environment from pollution'
    }
  ];
}
