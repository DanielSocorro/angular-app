import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from './services/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titles  = ['title 1','title 2','title 3', 'title 4','title 5'];
  uppercaseTitles = [];
 /*  apiContent; */

  constructor() {}

/*   ngOnInit() {
  this.us.getContent().suscribe((content) => (this.apiContent = content));
 } */

  changeTitles() {
    this.titles.push('title test');
    this.uppercaseTitles = UtilitiesService.convertArrayItemsToUppercase(this.titles);
    }
  }

    const titles = [ 'Title 1', 'Title 2', 'Title 3'];

