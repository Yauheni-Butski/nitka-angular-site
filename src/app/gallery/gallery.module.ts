import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { GalerryImagePlateComponent } from './components/galerry-image-plate/galerry-image-plate.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';

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
export class GalleryModule { }