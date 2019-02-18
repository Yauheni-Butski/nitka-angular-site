import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  public spinnerWidth: number = 200;
  public spinnerHeight: number = 200;

  constructor() { }

  ngOnInit() {
  }

}
