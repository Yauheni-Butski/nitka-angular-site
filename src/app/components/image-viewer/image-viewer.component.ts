import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImagePlate } from 'src/app/models/imagePlate';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
  @Input() images:ImagePlate[] = [];
  @Input() activeImage:ImagePlate = null;
  @Output() onCloseViewer = new EventEmitter();

  constructor() { }

  ngOnInit() {
    //пока тут полежит кусок кода. взять активный элемент
    //this.activeImage = this.section.imagePlates.find(ip => ip.id === activeImagePlateId);
  }

  closeViewer() {
    this.onCloseViewer.emit();
  }

}
