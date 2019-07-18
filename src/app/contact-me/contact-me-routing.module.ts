import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './';

const contactMeRoutes: Routes = [
  {
    path: '',
    component: ContactMeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(contactMeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactMeRoutingModule {}
