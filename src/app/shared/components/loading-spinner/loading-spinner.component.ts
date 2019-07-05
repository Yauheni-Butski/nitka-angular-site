import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {
  @Input() spinnerWidth = 200;
  @Input() spinnerHeight = 200;

  constructor() { }

  getHalfMargin(value: number) {
    return -value / 2;
  }
}
