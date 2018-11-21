import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.getCategoriesOnLoad(categories));
  }

  getCategoriesOnLoad(categories: Category[]){
    categories.map(category => this.categories.push(new Category(category)));
    this.prepareCategoryUrls();
  }

  prepareCategoryUrls(): void {
    this.categories.forEach(element => {
      var elementType = element.isLeaf == true ? 'section' : 'category';
      element.routerLinkUrl = `/${elementType}/${element.id}`;
    });
  }

}
