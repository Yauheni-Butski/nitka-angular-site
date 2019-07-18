import { Component, Input, Output, EventEmitter, ElementRef} from '@angular/core';
import { ImagePlate } from 'src/app/models/imagePlate';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent {
  private _activeImage: ImagePlate = null;
  get activeImage(): ImagePlate {
    return this._activeImage;
  }

  @Input('activeImage')
  set activeImage(value: ImagePlate) {
    this._activeImage = value;
    this.updateViewerButtonsState();
    this.tickAndScrollThumbs();
  }

  @Input() images: ImagePlate[] = [];
  @Output() onCloseViewer = new EventEmitter();

  isPrevButtonVisible = true;
  isNextButtonVisible = true;

  constructor(private elRef: ElementRef) { }

  tickAndScrollThumbs() {
    setTimeout(() => {
      const activeElHtml = this.elRef.nativeElement.querySelector('.thumb-item.active');
      if (activeElHtml !== null) {
        activeElHtml.scrollIntoView({behavior: 'smooth', inline: 'center'});
      }
     }, 100);
  }

  closeViewer() {
    this.activeImage = null;
    this.onCloseViewer.emit();
  }

  updateActiveImage(newActiveImage: ImagePlate) {
    this.activeImage = newActiveImage;
  }

  showPrevImage() {
    const activeImageIndex = this.images.findIndex(ip => ip.id === this.activeImage.id);
    const prevIndex = activeImageIndex - 1;
    if (prevIndex < 0) {
      return;
    }

    this.activeImage = this.images[prevIndex];
  }

  showNextImage() {
    const activeImageIndex = this.images.findIndex(ip => ip.id === this.activeImage.id);
    const nextIndex = activeImageIndex + 1;
    if (nextIndex > this.images.length - 1) {
      return;
    }

    this.activeImage = this.images[nextIndex];
  }

  updateViewerButtonsState() {
    if (this.images.length === 0 || this._activeImage === null) {
      return;
    }

    const activeImageIndex = this.images.findIndex(ip => ip.id === this.activeImage.id);
    const lastImageIndex = this.images.length - 1;

    switch (activeImageIndex) {
      case 0:
        this.isPrevButtonVisible = false;
        this.isNextButtonVisible = true;
        break;
      case lastImageIndex:
        this.isNextButtonVisible = false;
        this.isPrevButtonVisible = true;
        break;
      default:
        this.isPrevButtonVisible = true;
        this.isNextButtonVisible = true;
        break;
    }
  }

  toggleLikeActiveImage() {
    // TODO. Send request to server for updating state
    this.activeImage.isUserLike = !this.activeImage.isUserLike;
    this.activeImage.likeCount = this.activeImage.isUserLike ? this.activeImage.likeCount + 1 : this.activeImage.likeCount - 1;
  }

  getActiveImageStyle() {
    const style = {
      'background-image': `url(${this.activeImage.imagePath})`
    };

    return style;
  }

  getThumbImageStyle(image: ImagePlate) {
    const style = {
      'background-image': `url(${image.thumbPath})`
    };

    return style;
  }
}
