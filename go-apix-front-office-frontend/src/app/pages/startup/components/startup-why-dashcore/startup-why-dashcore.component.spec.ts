import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupWhyDashcoreComponent } from './startup-why-dashcore.component';

describe('StartupWhyDashcoreComponent', () => {
  let component: StartupWhyDashcoreComponent;
  let fixture: ComponentFixture<StartupWhyDashcoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StartupWhyDashcoreComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupWhyDashcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
