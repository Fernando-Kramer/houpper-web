import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email = '';
  password = '';
  remember = false;

  showPassword = false;
  isLoading = false;
  showMockMessage = false;


  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }


  onSubmit(): void {

    this.showMockMessage = false;
    this.isLoading = true;

    // MOCK
    setTimeout(() => {

      this.isLoading = false;
      this.showMockMessage = true;

      console.log({
        email: this.email,
        password: this.password,
        remember: this.remember
      });

    }, 1000);
  }

}