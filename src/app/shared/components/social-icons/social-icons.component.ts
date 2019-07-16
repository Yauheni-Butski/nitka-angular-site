import { Component, OnInit, Input } from '@angular/core';
import { SocialLink } from '../../models/socialLink';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {

  @Input() iconWidthHeight = 26;
  @Input() useBorder = true;
  @Input() customColor: string = null;
  icons: SocialLink[] = [];

  ngOnInit() {
    this.icons = [
      new SocialLink({ 'url': '#', 'id': 'fa-instagram', 'defColor': '#BD30A4', 'defBorderColor': '#BD30A4' }),
      new SocialLink({ 'url': '#', 'id': 'fa-facebook', 'defColor': '#3E5C9A', 'defBorderColor': '#3E5C9A' }),
      new SocialLink({ 'url': '#', 'id': 'fa-vk', 'defColor': '#4A76A8', 'defBorderColor': '#4A76A8' }),
      new SocialLink({ 'url': '#', 'id': 'fa-telegram-plane', 'defColor': '#32AADF', 'defBorderColor': '#32AADF' }),
    ];
  }

  constructor() { }

  getFontSize() {
    return this.iconWidthHeight - 10;
  }

  getBorderRadius() {
    return this.iconWidthHeight / 2;
  }

  getIconStyles(socialLinkIcon: SocialLink) {
    const style = {
      'width': `${this.iconWidthHeight}px`,
      'height': `${this.iconWidthHeight}px`,
      'font-size': `${this.getFontSize()}px`,
      'border-radius': `${this.getBorderRadius()}px`,
      'color': this.customColor !== null ? this.customColor : socialLinkIcon.defColor,
      'border-color': this.customColor !== null ? this.customColor : socialLinkIcon.defBorderColor
    };

    return style;
  }

  getIconClasses(socialLinkIcon: SocialLink) {
    const classes = {
      'fab': true,
      [socialLinkIcon.id]: true,
      'bordered': this.useBorder
    };

    return classes;
  }
}
