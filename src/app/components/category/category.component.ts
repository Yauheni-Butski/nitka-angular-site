import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { IImageCard } from 'src/app/models/interfaces/IImageCard';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnDestroy {

  navigationSubscription: any;
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
          this.getCategories();
        }
      })
   }

  ngOnDestroy() {
    if(this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getCategories(): void {
    const categoryId = this.activatedRoute.snapshot.paramMap.get('id');

    var id = categoryId ? +categoryId : null;
    this.categoryService.getCategories(id).subscribe(categories => this.getCategoriesOnLoad(categories));

  }

  getCategoriesOnLoad(categories: IImageCard[]){
    this.categories = [];

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
