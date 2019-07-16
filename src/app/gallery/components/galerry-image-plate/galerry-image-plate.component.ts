import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImagePlate } from 'src/app/models/imagePlate';

@Component({
  selector: 'app-galerry-image-plate',
  templateUrl: './galerry-image-plate.component.html',
  styleUrls: ['./galerry-image-plate.component.scss']
})
export class GalerryImagePlateComponent {

  @Input() imagePlate: ImagePlate;
  @Output() zoomingImage = new EventEmitter<number>();

  constructor() { }

  zoomImage() {
    this.zoomingImage.emit(this.imagePlate.id);
  }

  getGalleryImagePlateStyle() {
    const style = {
      'background-image': `url(${this.imagePlate.thumbPath})`
    };

    return style;
  }
}
