import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContextMenuProtectionDirective } from '../shared/directives/context-menu-protection.directive';
import { MouseWheelHzScrollDirective } from '../shared/directives/mouse-whell-hz-scroll.directive';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner/loading-spinner.component';
import { SocialIconsComponent } from '../shared/components/social-icons/social-icons.component';
import { InnerNavComponent } from '../shared/components/inner-nav/inner-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ContextMenuProtectionDirective,
    MouseWheelHzScrollDirective,
    LoadingSpinnerComponent,
    SocialIconsComponent,
    InnerNavComponent
  ],
  exports: [
    ContextMenuProtectionDirective,
    MouseWheelHzScrollDirective,
    LoadingSpinnerComponent,
    SocialIconsComponent,
    InnerNavComponent
  ]
})
export class SharedModule { }
