import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements AfterViewInit {
  @Input() titleText = 'this is my title';
  showTitle: true;
  test = 'this is a test';

  constructor(@Inject(DOCUMENT) document) {

  }

  ngAfterViewInit(): void {
/*     const title =  document.getElementById('title');
    alert('Initiated');
    alert(title?.innerHTML); */

  }
}

class Auto {
  puertas;
  velocidad;
  color;

  constructor(doors, speed, color) {
    this.doors = 'doors';
    this.speed = 'speed';
    this.color = 'color';
  }

  getPuertas () {

  }
}
