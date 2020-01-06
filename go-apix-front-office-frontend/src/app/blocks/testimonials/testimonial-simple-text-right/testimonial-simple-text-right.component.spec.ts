import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSimpleTextRightComponent } from './testimonial-simple-text-right.component';

describe('TestimonialSimpleTextRightComponent', () => {
  let component: TestimonialSimpleTextRightComponent;
  let fixture: ComponentFixture<TestimonialSimpleTextRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialSimpleTextRightComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSimpleTextRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
