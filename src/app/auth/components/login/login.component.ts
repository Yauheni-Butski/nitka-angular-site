import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { NavigationService } from '../../../services';

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
              public navService: NavigationService,
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
        if (this.authService.redirectUrl) {
          this.navService.goToPrerequestedUrl();
        } else {
          this.navService.goToAdmin();
        }
      } else {
        this.message = 'Wrong login or password!';
        this.loginForm.setValue({username: '', password: ''});
      }
    });
  }
}
