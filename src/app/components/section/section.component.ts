import { Component , OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router';

import { Section } from '../../models/section';

import { SectionService } from '../../services/section.service';
import { ImagePlate } from 'src/app/models/imagePlate';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  section: Section;
  isImageViewerVisible: boolean = false;
  activeImage: ImagePlate;

  constructor(
    private sectionService: SectionService,
    private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
      this.getSectionContent();
    }

    getSectionContent() : void {
      const sectionId = +this.activatedRoute.snapshot.paramMap.get('id');

      this.sectionService.getSection(sectionId)
        .subscribe(section => { this.section = new Section(section) });
    }

    showImageViewer(activeImagePlateId: number){
      this.activeImage = this.section.imagePlates.find(ip => ip.id === activeImagePlateId);
      this.isImageViewerVisible = true;
    }

    closeImageViewer(){
      this.isImageViewerVisible = false;
    }
}
