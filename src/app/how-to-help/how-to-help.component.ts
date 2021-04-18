import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-help',
  templateUrl: './how-to-help.component.html',
  styleUrls: ['./how-to-help.component.css', '../main/main.component.css']
})
export class HowToHelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public goToSection(section: string) {
    window.location.hash = section;
  }

}
