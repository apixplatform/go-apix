import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterSimpleInlineComponent } from './form-register-simple-inline.component';

describe('FormRegisterSimpleInlineComponent', () => {
  let component: FormRegisterSimpleInlineComponent;
  let fixture: ComponentFixture<FormRegisterSimpleInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormRegisterSimpleInlineComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterSimpleInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
