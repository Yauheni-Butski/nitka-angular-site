import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(public authService: AuthService,
              public router: Router,
              private fb: FormBuilder) {
    this.setMessage();
  }

  setMessage() {
    const isLogged = this.authService.getLoggedStatus();
    this.message = `You are logged ${isLogged ? 'in' : 'out'}`;
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  loginUser() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this.message = 'Trying to log in ...';

    this.authService.loginUser(username, password).subscribe(data => {
      if (data.success) {
        this.authService.setLoggedStatus(true, data.userToken);
      }

      this.setMessage();
      if (this.authService.getLoggedStatus()) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      } else {
        this.message = 'Wrong login or password!';
        this.loginForm.setValue({username: '', password: ''});
      }
    });
  }
}
