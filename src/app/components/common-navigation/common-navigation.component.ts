import { Component } from '@angular/core';

@Component({
  selector: 'app-common-navigation',
  templateUrl: './common-navigation.component.html',
  styleUrls: ['./common-navigation.component.scss']
})
export class CommonNavigationComponent {

  isNavPanelVisible = false;

  showHideCommonNavPanel(): void {
    this.isNavPanelVisible = !this.isNavPanelVisible;
  }
}
