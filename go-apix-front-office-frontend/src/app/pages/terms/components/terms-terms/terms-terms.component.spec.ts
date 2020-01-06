import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsTermsComponent } from './terms-terms.component';

describe('TermsTermsComponent', () => {
  let component: TermsTermsComponent;
  let fixture: ComponentFixture<TermsTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TermsTermsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
