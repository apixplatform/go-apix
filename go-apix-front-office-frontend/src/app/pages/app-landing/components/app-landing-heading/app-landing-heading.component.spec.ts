import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLandingHeadingComponent } from './app-landing-heading.component';

describe('AppLandingHeadingComponent', () => {
  let component: AppLandingHeadingComponent;
  let fixture: ComponentFixture<AppLandingHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLandingHeadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLandingHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
