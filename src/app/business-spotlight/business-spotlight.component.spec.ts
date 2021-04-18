import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSpotlightComponent } from './business-spotlight.component';

describe('BusinessSpotlightComponent', () => {
  let component: BusinessSpotlightComponent;
  let fixture: ComponentFixture<BusinessSpotlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessSpotlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
