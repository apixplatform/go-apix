import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingIncludeComponent } from './pricing-include.component';

describe('PricingIncludeComponent', () => {
  let component: PricingIncludeComponent;
  let fixture: ComponentFixture<PricingIncludeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PricingIncludeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingIncludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
