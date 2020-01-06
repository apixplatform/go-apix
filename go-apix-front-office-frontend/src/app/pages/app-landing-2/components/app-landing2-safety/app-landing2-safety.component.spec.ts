import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanding2SafetyComponent } from './app-landing2-safety.component';

describe('AppLanding2SafetyComponent', () => {
  let component: AppLanding2SafetyComponent;
  let fixture: ComponentFixture<AppLanding2SafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLanding2SafetyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLanding2SafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
