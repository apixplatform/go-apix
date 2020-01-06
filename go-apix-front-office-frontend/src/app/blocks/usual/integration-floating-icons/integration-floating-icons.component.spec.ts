import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationFloatingIconsComponent } from './integration-floating-icons.component';

describe('IntegrationFloatingIconsComponent', () => {
  let component: IntegrationFloatingIconsComponent;
  let fixture: ComponentFixture<IntegrationFloatingIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationFloatingIconsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationFloatingIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
