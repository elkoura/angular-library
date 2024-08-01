import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() links: { icon: string, label: string, url: string }[] = [];
  isNavVisible: boolean = true;

  toggleNav() {
    this.isNavVisible = !this.isNavVisible;
  }
}
