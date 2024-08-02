import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  title : string | null = null;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.title = this.titleService.getTitle();
  }
}
