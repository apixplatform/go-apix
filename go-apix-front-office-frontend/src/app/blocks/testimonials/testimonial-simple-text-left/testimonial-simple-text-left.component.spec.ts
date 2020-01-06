import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSimpleTextLeftComponent } from './testimonial-simple-text-left.component';

describe('TestimonialSimpleTextLeftComponent', () => {
  let component: TestimonialSimpleTextLeftComponent;
  let fixture: ComponentFixture<TestimonialSimpleTextLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialSimpleTextLeftComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSimpleTextLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
