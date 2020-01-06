import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanding2FeaturesComponent } from './app-landing2-features.component';

describe('AppLanding2FeaturesComponent', () => {
  let component: AppLanding2FeaturesComponent;
  let fixture: ComponentFixture<AppLanding2FeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLanding2FeaturesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLanding2FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
