import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { GalerryImagePlateComponent, ImageViewerComponent } from './';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    GalerryImagePlateComponent,
    ImageViewerComponent
  ],
  exports: [
    GalerryImagePlateComponent,
    ImageViewerComponent
  ]
})
export class GalleryModule {}
