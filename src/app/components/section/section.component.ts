import { Component , OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router';

import { Section } from '../../models/section';

import { SectionService } from '../../services/section.service';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  section: Section;

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
}
