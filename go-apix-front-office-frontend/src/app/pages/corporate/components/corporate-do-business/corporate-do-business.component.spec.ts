import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateDoBusinessComponent } from './corporate-do-business.component';

describe('CorporateDoBusinessComponent', () => {
  let component: CorporateDoBusinessComponent;
  let fixture: ComponentFixture<CorporateDoBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateDoBusinessComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateDoBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
