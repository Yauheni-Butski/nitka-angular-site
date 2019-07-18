import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../../services/admin-dashboard.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  serverResponceText$: Observable<string>;

  constructor(private adminDashboardService: AdminDashboardService) {}

  ngOnInit() {
    this.getAdminDashboardData();
  }

  getAdminDashboardData(): void {
    this.serverResponceText$ = this.adminDashboardService.getAdminDashboard();
  }
}
