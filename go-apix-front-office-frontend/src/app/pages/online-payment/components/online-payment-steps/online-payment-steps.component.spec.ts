import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePaymentStepsComponent } from './online-payment-steps.component';

describe('OnlinePaymentStepsComponent', () => {
  let component: OnlinePaymentStepsComponent;
  let fixture: ComponentFixture<OnlinePaymentStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnlinePaymentStepsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePaymentStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
