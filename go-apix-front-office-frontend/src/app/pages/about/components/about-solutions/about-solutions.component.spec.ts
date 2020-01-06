import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSolutionsComponent } from './about-solutions.component';

describe('AboutSolutionsComponent', () => {
  let component: AboutSolutionsComponent;
  let fixture: ComponentFixture<AboutSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSolutionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
