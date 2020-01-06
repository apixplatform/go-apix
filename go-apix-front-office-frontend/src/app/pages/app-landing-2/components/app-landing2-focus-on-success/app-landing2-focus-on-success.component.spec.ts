import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanding2FocusOnSuccessComponent } from './app-landing2-focus-on-success.component';

describe('AppLanding2FocusOnSuccessComponent', () => {
  let component: AppLanding2FocusOnSuccessComponent;
  let fixture: ComponentFixture<AppLanding2FocusOnSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLanding2FocusOnSuccessComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLanding2FocusOnSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
