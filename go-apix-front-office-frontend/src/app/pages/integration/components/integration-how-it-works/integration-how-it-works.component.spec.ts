import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationHowItWorksComponent } from './integration-how-it-works.component';

describe('IntegrationHowItWorksComponent', () => {
  let component: IntegrationHowItWorksComponent;
  let fixture: ComponentFixture<IntegrationHowItWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationHowItWorksComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
