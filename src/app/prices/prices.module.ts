import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesRoutingModule } from './price-routing.module';
import { PricesComponent } from './';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PricesRoutingModule,
    SharedModule
  ],
  declarations: [
    PricesComponent
  ],
  exports: [
    PricesComponent
  ]
})
export class PricesModule { }
