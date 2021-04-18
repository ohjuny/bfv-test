import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  route = this.router.url;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToSection(section: string) {
    window.location.hash = section;
  }

}
