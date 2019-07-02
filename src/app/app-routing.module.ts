import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './components/category/category.component';
import { SectionComponent } from './components/section/section.component';
import { ContactMeComponent } from './contact-me/components/contact-me/contact-me.component';
import { PricesComponent } from './prices/components/prices/prices.component';

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
      { path: 'section/:id/prices', component: PricesComponent},
      { path: 'category/:id/prices', component: PricesComponent},
      { path: 'prices', component: PricesComponent},
      { path: 'contact', component: ContactMeComponent }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
