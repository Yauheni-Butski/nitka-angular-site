import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesRoutingModule } from './price-routing.module';
import { PricesComponent } from './';

@NgModule({
  imports: [
    CommonModule,
    PricesRoutingModule
  ],
  declarations: [
    PricesComponent
  ],
  exports: [
    PricesComponent
  ]
})
export class PricesModule { }
