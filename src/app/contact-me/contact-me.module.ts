import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../app-material.module';
import { ContactMeRoutingModule } from './contact-me-routing.module';

import { ContactMeComponent } from './components/contact-me/contact-me.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AppMaterialModule,
    ContactMeRoutingModule
  ],
  declarations: [
    ContactMeComponent
  ],
  exports: [
    ContactMeComponent
  ]
})
export class ContactMeModule { }
