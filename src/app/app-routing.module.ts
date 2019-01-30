import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './components/gallery/gallery.component';
import { CategoryComponent } from './components/category/category.component';
import { SectionComponent } from './components/section/section.component';

/* Layouts */
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';

const routes: Routes = [

  //Site (layout) routes
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: CategoryComponent, pathMatch: 'full' },
      { path: 'category/:id', component: CategoryComponent, runGuardsAndResolvers: 'paramsChange' },
      { path: 'section/:id', component: SectionComponent },
      { path: 'gallery', component: GalleryComponent }
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
