import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Section } from '../../models/section';

import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss']
})
export class CategorySectionComponent implements OnInit {

  sections: Section[] = [];

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getCategoryContent();
  }

  getCategoryContent() : void {
    const categoryId = +this.route.snapshot.paramMap.get('id'); 
    this.categoryService.getCategorySection(categoryId).subscribe(sections =>
      sections.map(section =>
        this.sections.push(new Section(section))));
  }

}
