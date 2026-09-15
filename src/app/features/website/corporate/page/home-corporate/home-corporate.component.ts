import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home-corporate',
  styleUrl: './home-corporate.component.scss',
  templateUrl: './home-corporate.component.html',
})
export class HomeCorporateComponent {

  login() {
    window.location.href = "http://localhost:4200/auth/login";
  }

}