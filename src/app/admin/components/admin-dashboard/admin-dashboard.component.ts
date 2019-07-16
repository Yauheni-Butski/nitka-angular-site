import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../../services/admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  serverResponceText: string;

  constructor(private adminDashboardService: AdminDashboardService) {}

  ngOnInit() {
    this.getAdminDashboardData();
  }

  getAdminDashboardData(): void {
    this.adminDashboardService.getAdminDashboard()
      .subscribe(res => { this.serverResponceText = res; });
  }
}
