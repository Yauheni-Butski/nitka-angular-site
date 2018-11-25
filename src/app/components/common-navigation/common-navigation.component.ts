import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-navigation',
  templateUrl: './common-navigation.component.html',
  styleUrls: ['./common-navigation.component.scss']
})
export class CommonNavigationComponent implements OnInit {

  isNavPanelVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showHideCommonNavPanel(): void{
    debugger;
    console.log(this.isNavPanelVisible);
    this.isNavPanelVisible = !this.isNavPanelVisible;
  }

}
