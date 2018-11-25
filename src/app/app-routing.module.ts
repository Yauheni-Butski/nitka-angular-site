import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './components/gallery/gallery.component';
import { CategoryComponent } from './components/category/category.component';
import { SectionComponent } from './components/section/section.component';


const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'category/:id', component: CategoryComponent, runGuardsAndResolvers: 'paramsChange' },
  { path: 'section/:id', component: SectionComponent },
  { path: 'gallery', component: GalleryComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
