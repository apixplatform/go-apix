import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLandingTwinPhoneLeftListComponent } from './app-landing-twin-phone-left-list.component';

describe('AppLandingTwinPhoneLeftListComponent', () => {
  let component: AppLandingTwinPhoneLeftListComponent;
  let fixture: ComponentFixture<AppLandingTwinPhoneLeftListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLandingTwinPhoneLeftListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLandingTwinPhoneLeftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
