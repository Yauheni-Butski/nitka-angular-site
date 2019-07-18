import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {ContextMenuProtectionDirective, MouseWheelHzScrollDirective, LoadingSpinnerComponent,
        SocialIconsComponent, InnerNavComponent, SpinnerContainerComponent} from './';

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
