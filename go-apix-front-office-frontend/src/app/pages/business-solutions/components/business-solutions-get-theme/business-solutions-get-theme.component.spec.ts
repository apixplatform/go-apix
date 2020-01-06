import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSolutionsGetThemeComponent } from './business-solutions-get-theme.component';

describe('BusinessSolutionsGetThemeComponent', () => {
  let component: BusinessSolutionsGetThemeComponent;
  let fixture: ComponentFixture<BusinessSolutionsGetThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessSolutionsGetThemeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSolutionsGetThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
