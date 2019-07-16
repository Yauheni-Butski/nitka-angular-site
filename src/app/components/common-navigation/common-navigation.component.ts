import { Component } from '@angular/core';
import { CommonNavItem } from '../../models/commonNavItem';

@Component({
  selector: 'app-common-navigation',
  templateUrl: './common-navigation.component.html',
  styleUrls: ['./common-navigation.component.scss']
})
export class CommonNavigationComponent {

  isNavPanelVisible = false;

  navItems: CommonNavItem[] = [
    {
      text: 'Главная',
      routerLinkPath: '/'
    },
    {
      text: 'Услуги',
      routerLinkPath: '/prices'
    },
    {
      text: 'Контакты',
      routerLinkPath: '/contact'
    }
  ];

  showHideCommonNavPanel(): void {
    this.isNavPanelVisible = !this.isNavPanelVisible;
  }
}
