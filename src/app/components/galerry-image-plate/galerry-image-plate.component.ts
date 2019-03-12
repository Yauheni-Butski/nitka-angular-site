import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImagePlate } from '../../models/imagePlate';

@Component({
  selector: 'app-galerry-image-plate',
  templateUrl: './galerry-image-plate.component.html',
  styleUrls: ['./galerry-image-plate.component.scss']
})
export class GalerryImagePlateComponent implements OnInit {

  @Input() imagePlate: ImagePlate;
  @Output() zoomingImage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  zoomImage(){
    this.zoomingImage.emit(this.imagePlate.id);
  }

  toggleLikeImage(){
    this.imagePlate.isUserLike = !this.imagePlate.isUserLike;
    this.imagePlate.likeCount = this.imagePlate.isUserLike ? this.imagePlate.likeCount + 1 : this.imagePlate.likeCount - 1;
  }

}
