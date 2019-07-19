import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Category } from '../../models/category';
import { CategoryService } from '../../services';
import { delay } from 'rxjs/operators'; // TODO. Comment it. FOR TEST PURPOSE. LOADING SPINNER

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnDestroy {

  navigationSubscription: any;
  category: Category;
  hasInnerNavigation = false;

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
          this.getCategories();
        }
      });
   }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getCategories(): void {
    const categoryId = this.activatedRoute.snapshot.paramMap.get('id');

    const id = categoryId ? +categoryId : null;
    this.categoryService.getCategory(id)
      .pipe(delay(1000)) // TODO. Comment it. FOR TEST PURPOSE. LOADING SPINNER
      .subscribe(categoryRes => this.getCategoryOnLoad(categoryRes));

  }

  getCategoryOnLoad(category: Category) {
    this.category = new Category(category);
    this.hasInnerNavigation = (category.navLinks !== null && category.navLinks.length !== 0);
    this.prepareCategoryUrls();
  }

  prepareCategoryUrls(): void {
    this.category.categoryCards.forEach(element => {
      const elementType = element.isLeaf === true ? 'section' : 'category';
      element.routerLinkUrl = `/${elementType}/${element.id}`;
    });
  }

}
