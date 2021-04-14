import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showNav = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    console.log(this.showNav);
    this.showNav = !this.showNav;
    console.log(this.showNav);
    
  }

}
