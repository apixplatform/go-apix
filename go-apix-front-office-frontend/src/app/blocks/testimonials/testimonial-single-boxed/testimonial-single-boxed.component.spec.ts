import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSingleBoxedComponent } from './testimonial-single-boxed.component';

describe('TestimonialSingleBoxedComponent', () => {
  let component: TestimonialSingleBoxedComponent;
  let fixture: ComponentFixture<TestimonialSingleBoxedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialSingleBoxedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSingleBoxedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
