import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

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
