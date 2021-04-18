import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Business, BUSINESSES } from './mock-businesses'

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor() { }

  getBusinesses(): Observable<Business[]> {
    const businesses = of(BUSINESSES);
    return businesses;
  }

  getBusiness(id: Number): Observable<Business>{
    const business = BUSINESSES.find(business => business.id == id); // == vs ===
    return of(business);
  }
}
