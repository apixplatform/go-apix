import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationRegisterComponent } from './integration-register.component';

describe('IntegrationRegisterComponent', () => {
  let component: IntegrationRegisterComponent;
  let fixture: ComponentFixture<IntegrationRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationRegisterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
