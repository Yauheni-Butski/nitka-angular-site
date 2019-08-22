import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {ContextMenuProtectionDirective, MouseWheelHzScrollDirective, LoadingSpinnerComponent,
        SocialIconsComponent, InnerNavComponent, SpinnerContainerComponent, ImageCardLinkPipe,
        ForTop6Directive, IfNotEmptyDirective} from './';

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
    SpinnerContainerComponent,
    ImageCardLinkPipe,
    ForTop6Directive,
    IfNotEmptyDirective
  ],
  exports: [
    ContextMenuProtectionDirective,
    MouseWheelHzScrollDirective,
    LoadingSpinnerComponent,
    SocialIconsComponent,
    InnerNavComponent,
    SpinnerContainerComponent,
    ImageCardLinkPipe,
    ForTop6Directive,
    IfNotEmptyDirective
  ]
})
export class SharedModule { }
