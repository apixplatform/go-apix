import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanding2TrendingDesignComponent } from './app-landing2-trending-design.component';

describe('AppLanding2TrendingDesignComponent', () => {
  let component: AppLanding2TrendingDesignComponent;
  let fixture: ComponentFixture<AppLanding2TrendingDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLanding2TrendingDesignComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLanding2TrendingDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
