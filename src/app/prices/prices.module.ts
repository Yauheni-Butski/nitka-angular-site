import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesComponent } from './components/prices/prices.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PricesComponent
  ],
  exports: [
    PricesComponent
  ]
})
export class PricesModule { }
