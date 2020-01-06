import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderLogosComponent } from './slider-logos.component';

describe('SliderLogosComponent', () => {
  let component: SliderLogosComponent;
  let fixture: ComponentFixture<SliderLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderLogosComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
