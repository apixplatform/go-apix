import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterCompanyComponent } from './form-register-company.component';

describe('FormRegisterCompanyComponent', () => {
  let component: FormRegisterCompanyComponent;
  let fixture: ComponentFixture<FormRegisterCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormRegisterCompanyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
