import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationExtendCoreComponent } from './integration-extend-core.component';

describe('IntegrationExtendCoreComponent', () => {
  let component: IntegrationExtendCoreComponent;
  let fixture: ComponentFixture<IntegrationExtendCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationExtendCoreComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationExtendCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
