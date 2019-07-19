import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(public router: Router,
              public authService: AuthService) {}

  private loginRoute = '/login';
  private adminRoute = '/admin';

  private navigationExtras: NavigationExtras = {
    queryParamsHandling: 'preserve',
    preserveFragment: true
  };

  private navigateToRoute(route: string) {
    this.router.navigate([route], this.navigationExtras);
  }

  goToLogin() {
    this.navigateToRoute(this.loginRoute);
  }

  goToAdmin() {
    this.navigateToRoute(this.adminRoute);
  }

  goToPrerequestedUrl() {
    const prerequestedUrl = this.authService.redirectUrl;
    this.navigateToRoute(prerequestedUrl);
  }
}
