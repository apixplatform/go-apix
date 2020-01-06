import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateHeadingComponent } from './corporate-heading.component';

describe('CorporateHeadingComponent', () => {
  let component: CorporateHeadingComponent;
  let fixture: ComponentFixture<CorporateHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateHeadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
