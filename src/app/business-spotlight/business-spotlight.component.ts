import { Component, OnInit } from '@angular/core';

import { Business } from '../mock-businesses'
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-business-spotlight',
  templateUrl: './business-spotlight.component.html',
  styleUrls: ['./business-spotlight.component.css', '../main/main.component.css']
})
export class BusinessSpotlightComponent implements OnInit {
  businesses: Business[] = [];
  
  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.getBusinesses();
  }

  public goToSection(section: string) {
    window.location.hash = section;
  }

  getBusinesses(): void {
    this.businessService.getBusinesses()
      .subscribe(businesses => this.businesses = businesses);
  }

}
