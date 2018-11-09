import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  //TODO. For test. Need to debug mapping
  mapCategories(categ:any) :void {
    this.categories = categ;
  }

  getCategories(): void {
    /* this.categories = this.categoryService.getCategories(); */
    this.categoryService.getCategories().subscribe(categ => this.mapCategories(categ));
  }

}
