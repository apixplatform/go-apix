import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersIntegrationToolsComponent } from './developers-integration-tools.component';

describe('DevelopersIntegrationToolsComponent', () => {
  let component: DevelopersIntegrationToolsComponent;
  let fixture: ComponentFixture<DevelopersIntegrationToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevelopersIntegrationToolsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersIntegrationToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
