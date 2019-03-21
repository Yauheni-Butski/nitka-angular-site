import { Component , OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Section } from '../../models/section';
import { SectionService } from '../../services/section.service';
import { ImagePlate } from 'src/app/models/imagePlate';

//import { delay } from 'rxjs/operators'; //FOR TEST LOADING SPINNER

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  section: Section;
  activeImage: ImagePlate = null;

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
        //.pipe(delay(1000)) //FOR TEST LOADING SPINNER
        .subscribe(section => { this.section = new Section(section) });
    }

    showImageViewer(activeImagePlateId: number){
      this.activeImage = this.section.imagePlates.find(ip => ip.id === activeImagePlateId);
    }

    closeImageViewer(){
      this.activeImage = null;
    }
}
