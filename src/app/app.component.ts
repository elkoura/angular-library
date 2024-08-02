import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "@utils/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-library';

  navLinks = [
    { icon: 'fas fa-home', label: 'Home', url: '/' },
    { icon: 'fas fa-book', label: 'Books', url: '/books' }
  ];
}
