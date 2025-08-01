import { Component } from '@angular/core';
import { AuthService } from '../../../core/services';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';
  emailError: boolean = false;
  passwordError: boolean = false;
  emailErrorMessage: string = '';
  passwordErrorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  validateEmail(): void {
    if (!this.email) {
      this.emailError = true;
      this.emailErrorMessage = 'Email is required!';
    } else if (!this.isValidEmail(this.email)) {
      this.emailError = true;
      this.emailErrorMessage = 'Email is not valid!';
    } else {
      this.emailError = false;
      this.emailErrorMessage = '';
    }
  }

  isValidEmail(email: string): boolean {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regEx.test(email)
  }

  validatePassword() {
    if (!this.password) {
      this.passwordError = true;
      this.passwordErrorMessage = 'Password is required!';
    } else if (this.password.length < 4) {
      this.passwordError = true;
      this.passwordErrorMessage = 'Password must be at least 4 characters!';
    } else {
      this.passwordError = false;
      this.passwordErrorMessage = '';
    }
  }

  onSubmit() {
    console.log('clicked')
    this.validateEmail();
    this.validatePassword();

    if (!this.emailError && !this.passwordError) {
      const response = this.authService.login(this.email, this.password);

      if (response) {
        this.router.navigate(['/home']);
      }
    }
  }
}
