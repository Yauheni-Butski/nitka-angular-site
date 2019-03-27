import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './components/category/category.component';
import { SectionComponent } from './components/section/section.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ContactMeOldComponent } from './components/contact-me-old/contact-me-old.component';

/* Layouts */
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { ContactLayoutComponent } from './_layout/contact-layout/contact-layout.component';

const routes: Routes = [

  //Site (layout) routes
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: CategoryComponent, pathMatch: 'full' },
      { path: 'category/:id', component: CategoryComponent, runGuardsAndResolvers: 'paramsChange' },
      { path: 'section/:id', component: SectionComponent },
      { path: 'contact', component: ContactMeComponent }
    ]
  },
  {
    path: 'contact-old',
    component: ContactLayoutComponent,
    children: [
      { path: '', component: ContactMeOldComponent, pathMatch: 'full' },
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
