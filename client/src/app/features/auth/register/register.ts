import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services';

@Component({
	selector: 'app-register',
	imports: [FormsModule, RouterLink],
	templateUrl: './register.html',
	styleUrl: './register.css'
})
export class Register {
	username: string = '';
	email: string = '';
	phoneNumber: string = '';
	password: string = '';
	rePassword: string = '';

	usernameError: boolean = false;
	emailError: boolean = false;
	phoneNumberError: boolean = false;
	passwordError: boolean = false;

	usernameErrorMessage: string = '';
	emailErrorMessage: string = '';
	phoneNumberErrorMessage: string = '';
	passwordErrorMessage: string = '';

	formSubmitted: boolean = false;

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
		return regEx.test(email);
	}

	validateUsername(): void {
		if (!this.username) {
			this.usernameError = true;
			this.usernameErrorMessage = 'Username is required!';
		} else if (this.username.length < 4) {
			this.usernameError = true;
			this.usernameErrorMessage = 'Username must be at least 4 characters!';
		} else {
			this.usernameError = false;
			this.usernameErrorMessage = '';
		}
	}

	validatePhoneNumber(): void {
		if (!this.phoneNumber) {
			this.phoneNumberError = true;
			this.phoneNumberErrorMessage = 'Phone Number is required!';
		} else if (!this.isValidPhoneNumber(this.phoneNumber)) {
			this.phoneNumberError = true;
			this.phoneNumberErrorMessage = 'Phone Number must be valid!'
		} else {
			this.phoneNumberError = false;
			this.phoneNumberErrorMessage = '';
		}
	}

	isValidPhoneNumber(phoneNumber: string): boolean {
		const regEx = /\d{3}[-.\s]\d{3}[-.\s]\d{3}/;
		return regEx.test(phoneNumber);
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

		if (this.rePassword !== this.password) {
			this.passwordError = true;
			this.passwordErrorMessage = 'Passwords don\'t match!';
		}
	}

	onSubmit(): void {
		console.log('clicked register submit');

		this.validateUsername();
		this.validateEmail();
		this.validatePhoneNumber();
		this.validatePassword();

		if (!this.usernameError && !this.emailError && !this.phoneNumberError && !this.passwordError) {
			const response = this.authService.register(this.username, this.password, this.rePassword, this.email, this.phoneNumber);

			if (response) {
				this.formSubmitted = true;
				this.router.navigate(['/home']);
			}
		}

		this.formSubmitted = false;
	}
}
