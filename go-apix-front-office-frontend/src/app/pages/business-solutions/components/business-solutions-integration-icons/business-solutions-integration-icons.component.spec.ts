import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSolutionsIntegrationIconsComponent } from './business-solutions-integration-icons.component';

describe('BusinessSolutionsIntegrationIconsComponent', () => {
  let component: BusinessSolutionsIntegrationIconsComponent;
  let fixture: ComponentFixture<BusinessSolutionsIntegrationIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessSolutionsIntegrationIconsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      BusinessSolutionsIntegrationIconsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
