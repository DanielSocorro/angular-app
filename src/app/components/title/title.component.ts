import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements AfterViewInit {
  @Input() titleText = 'this is my title';
  showTitle: boolean;

  constructor() {
    this.showTitle = true;
  }

  ngAfterViewInit(): void {
/*     const title =  document.getElementById('title');
    alert('Initiated');
    alert(title?.innerHTML); */

  }
}
