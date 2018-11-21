import { Component/* , OnInit */, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Section } from '../../models/section';

import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements/*  OnInit,  */OnDestroy {

  navigationSubscription;
  sections: Section[] = [];

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
          this.getCategoryContent();
        }
      })
     }

  /*   ngOnInit() {
    this.getCategoryContent();
  } */

  ngOnDestroy() {
    if(this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getCategoryContent() : void {
    const categoryId = +this.activatedRoute.snapshot.paramMap.get('id'); 
    this.categoryService.getCategorySection(categoryId).subscribe(sections => this.getCategoriesOnLoad(sections));
  }

  getCategoriesOnLoad(sections: Section[]){
    this.sections = [];

    sections.map(section => this.sections.push(new Section(section)));
    this.prepareSectionUrls();
  }

  prepareSectionUrls(): void {
    this.sections.forEach(element => {
      var elementType = element.isLeaf == true ? 'section' : 'category';
      element.routerLinkUrl = `/${elementType}/${element.id}`;
    });
  }

}
