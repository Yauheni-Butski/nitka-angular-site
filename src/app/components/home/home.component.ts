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
  mapCategories(categ:Category[]) : void {

    this.categories = [];
    categ.forEach(element => {
      let categObj = new Category(element);
      console.log(categObj);
      this.categories.push(categObj)
    });

    //this.categories = categ;
    console.log(this.categories);
    console.log(this.categories[0].getFullNameDescription());
  }

  getCategories(): void {
    /* this.categories = this.categoryService.getCategories(); */
    this.categoryService.getCategories().subscribe(categ => this.mapCategories(categ));
  }

}
