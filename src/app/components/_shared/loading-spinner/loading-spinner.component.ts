import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  @Input() spinnerWidth: number = 350;
  @Input() spinnerHeight: number = 350;

  constructor() { }

  ngOnInit() {
  }

  getHalfMargin(value: number){
    return -value/2;
  }

}
