import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent, SectionComponent } from './';
/* Layouts */
import { SiteLayoutComponent } from './_layout';

const routes: Routes = [

  // Site (layout) routes
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: CategoryComponent, pathMatch: 'full' },
      { path: 'category/:id', component: CategoryComponent, runGuardsAndResolvers: 'paramsChange' },
      { path: 'section/:id', component: SectionComponent },
      { path: 'section/:id/prices',
        loadChildren: () => import('./prices/prices.module').then(mod => mod.PricesModule)}, // TODO. Rework path. Use Id.
      { path: 'category/:id/prices',
        loadChildren: () => import('./prices/prices.module').then(mod => mod.PricesModule)}, // TODO. Rework path. Use Id.
      { path: 'prices', loadChildren: () => import('./prices/prices.module').then(mod => mod.PricesModule) },
      { path: 'contact', loadChildren: () => import('./contact-me/contact-me.module').then(mod => mod.ContactMeModule) }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
