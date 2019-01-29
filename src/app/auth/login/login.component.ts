import { Component }        from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService }      from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'You are logged ' + (this.authService.getLoggedStatus() ? 'in' : 'out');
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    //TODO. Rework getting values from fields
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.message = 'Trying to log in ...';
    
    this.authService.loginUser(username, password).subscribe(data => {
      if (data.success){
        this.authService.setLoggedStatus(true, data.userToken);
      }

      this.setMessage();
      if (this.authService.getLoggedStatus()) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      } else {
        this.message = 'Wrong login or password!';
        target.querySelector('#username').value = '';
        target.querySelector('#password').value = '';
      }
    });
  }
}