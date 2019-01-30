import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
