import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomateSocialAutomationSolutionComponent } from './automate-social-automation-solution.component';

describe('AutomateSocialAutomationSolutionComponent', () => {
  let component: AutomateSocialAutomationSolutionComponent;
  let fixture: ComponentFixture<AutomateSocialAutomationSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutomateSocialAutomationSolutionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      AutomateSocialAutomationSolutionComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
