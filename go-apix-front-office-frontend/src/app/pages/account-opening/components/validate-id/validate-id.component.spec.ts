import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateIdComponent } from './validate-id.component';

describe('ValidateIdComponent', () => {
  let component: ValidateIdComponent;
  let fixture: ComponentFixture<ValidateIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateIdComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
