import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasLightweightTemplateComponent } from './saas-lightweight-template.component';

describe('SaasLightweightTemplateComponent', () => {
  let component: SaasLightweightTemplateComponent;
  let fixture: ComponentFixture<SaasLightweightTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaasLightweightTemplateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasLightweightTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
