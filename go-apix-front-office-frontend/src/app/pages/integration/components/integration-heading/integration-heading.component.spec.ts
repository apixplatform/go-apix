import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationHeadingComponent } from './integration-heading.component';

describe('IntegrationHeadingComponent', () => {
  let component: IntegrationHeadingComponent;
  let fixture: ComponentFixture<IntegrationHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationHeadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
