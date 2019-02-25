import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImagePlate } from 'src/app/models/imagePlate';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
  private _activeImage: ImagePlate = null;
  get activeImage(): ImagePlate {
    return this._activeImage;
  }
  @Input('activeImage')
  set activeImage(value: ImagePlate) {
    this._activeImage = value;
    this.updateViewerButtonsState();
  }

  @Input() images:ImagePlate[] = [];
  @Output() onCloseViewer = new EventEmitter();

  isPrevButtonVisible: boolean = true;
  isNextButtonVisible: boolean = true;

  constructor() { }

  ngOnInit() {
    //пока тут полежит кусок кода. взять активный элемент
    //this.activeImage = this.section.imagePlates.find(ip => ip.id === activeImagePlateId);
  }

  closeViewer() {
    this.activeImage = null;
    this.onCloseViewer.emit();
  }

  updateActiveImage(newActiveImage: ImagePlate){
    this.activeImage = newActiveImage;
  }

  showPrevImage(){
    let activeImageIndex = this.images.findIndex(ip => ip.id === this.activeImage.id);
    let prevIndex = activeImageIndex - 1;
    if(prevIndex < 0){
      return;
    }

    this.activeImage = this.images[prevIndex];
  }

  showNextImage(){
    let activeImageIndex = this.images.findIndex(ip => ip.id === this.activeImage.id);
    let nextIndex = activeImageIndex + 1;
    if(nextIndex > this.images.length - 1){
      return;
    }

    this.activeImage = this.images[nextIndex];
  }

  updateViewerButtonsState(){
    if(this.images.length === 0 || this._activeImage === null){
      return;
    }

    let activeImageIndex = this.images.findIndex(ip => ip.id === this.activeImage.id);
    if (activeImageIndex === this.images.length -1){
      this.isNextButtonVisible = false;
    }
    else{
      this.isNextButtonVisible = true;
    }

    if(activeImageIndex === 0){
      this.isPrevButtonVisible = false;
    }
    else{
      this.isPrevButtonVisible = true;
    }
  }

}
