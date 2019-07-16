import { Component, Input } from '@angular/core';

import { IImageCard } from '../../models/interfaces/IImageCard';

@Component({
  selector: 'app-image-card-plates',
  templateUrl: './image-card-plates.component.html',
  styleUrls: ['./image-card-plates.component.scss']
})
export class ImageCardPlatesComponent {

  @Input() imageCards: IImageCard[] = [];
  @Input() isFullHeightPlates = false;

  getCardCoverStyle(imageCard: IImageCard) {
    const style = {
      'background-image': `url(${imageCard.coverImagePath})`
    };

    return style;
  }
}
