import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSolutionsComponent } from './business-solutions.component';

describe('BusinessSolutionsComponent', () => {
  let component: BusinessSolutionsComponent;
  let fixture: ComponentFixture<BusinessSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessSolutionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
