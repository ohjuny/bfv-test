import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Business } from '../mock-businesses'
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  id = this.route.snapshot.params.id;
  business: Business;

  constructor(
      private route: ActivatedRoute,
      private businessService: BusinessService
    ) { }

  ngOnInit(): void {
    this.getBusiness(this.id);
  }

  getBusiness(id: Number): void {
    this.businessService.getBusiness(this.id)
      .subscribe(business => this.business = business);
  }

}
