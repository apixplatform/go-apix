import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanding2Component } from './app-landing2.component';

describe('AppLanding2Component', () => {
  let component: AppLanding2Component;
  let fixture: ComponentFixture<AppLanding2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLanding2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLanding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
