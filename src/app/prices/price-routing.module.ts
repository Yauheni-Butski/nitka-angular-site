import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricesComponent } from './components/prices/prices.component';

const pricesRoutes: Routes = [
  {
    path: '',
    component: PricesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(pricesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PricesRoutingModule {}
