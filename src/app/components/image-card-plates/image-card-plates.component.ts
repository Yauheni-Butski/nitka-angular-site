import { Component, OnInit, Input } from '@angular/core';

import { IImageCard } from '../../models/interfaces/IImageCard';

@Component({
  selector: 'app-image-card-plates',
  templateUrl: './image-card-plates.component.html',
  styleUrls: ['./image-card-plates.component.scss']
})
export class ImageCardPlatesComponent implements OnInit {

  @Input() imageCards: IImageCard[] = [];

  constructor() { }

  ngOnInit() {
  }

}
