import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanding2HeadingComponent } from './app-landing2-heading.component';

describe('AppLanding2HeadingComponent', () => {
  let component: AppLanding2HeadingComponent;
  let fixture: ComponentFixture<AppLanding2HeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLanding2HeadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLanding2HeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
