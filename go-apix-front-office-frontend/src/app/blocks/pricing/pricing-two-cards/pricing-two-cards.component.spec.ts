import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTwoCardsComponent } from './pricing-two-cards.component';

describe('PricingTwoCardsComponent', () => {
  let component: PricingTwoCardsComponent;
  let fixture: ComponentFixture<PricingTwoCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PricingTwoCardsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingTwoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
