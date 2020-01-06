import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanding2PoppingHighlightComponent } from './app-landing2-popping-highlight.component';

describe('AppLanding2PoppingHighlightComponent', () => {
  let component: AppLanding2PoppingHighlightComponent;
  let fixture: ComponentFixture<AppLanding2PoppingHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLanding2PoppingHighlightComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLanding2PoppingHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
