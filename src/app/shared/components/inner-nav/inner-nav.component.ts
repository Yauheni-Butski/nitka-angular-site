import { Component, Input } from '@angular/core';
import { NavLink } from '../../../models/navLink';

@Component({
  selector: 'app-inner-nav',
  templateUrl: './inner-nav.component.html',
  styleUrls: ['./inner-nav.component.scss']
})
export class InnerNavComponent {
  @Input() navLinks: NavLink[] = [];
}
