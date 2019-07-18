import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContextMenuProtectionDirective } from './directives/context-menu-protection.directive';
import { MouseWheelHzScrollDirective } from './directives/mouse-whell-hz-scroll.directive';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { InnerNavComponent } from './components/inner-nav/inner-nav.component';
import { SpinnerContainerComponent } from './components/spinner-container/spinner-container.component';

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
    InnerNavComponent,
    SpinnerContainerComponent
  ],
  exports: [
    ContextMenuProtectionDirective,
    MouseWheelHzScrollDirective,
    LoadingSpinnerComponent,
    SocialIconsComponent,
    InnerNavComponent,
    SpinnerContainerComponent
  ]
})
export class SharedModule { }
