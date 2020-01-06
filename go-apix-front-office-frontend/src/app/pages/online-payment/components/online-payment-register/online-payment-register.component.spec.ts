import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePaymentRegisterComponent } from './online-payment-register.component';

describe('OnlinePaymentRegisterComponent', () => {
  let component: OnlinePaymentRegisterComponent;
  let fixture: ComponentFixture<OnlinePaymentRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnlinePaymentRegisterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePaymentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
