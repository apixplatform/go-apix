import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartBusinessDeserveBetterComponent } from './smart-business-deserve-better.component';

describe('SmartBusinessDeserveBetterComponent', () => {
  let component: SmartBusinessDeserveBetterComponent;
  let fixture: ComponentFixture<SmartBusinessDeserveBetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmartBusinessDeserveBetterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartBusinessDeserveBetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
