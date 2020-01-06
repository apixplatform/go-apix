import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeadingComponent } from './home-heading.component';

describe('HomeHeadingComponent', () => {
  let component: HomeHeadingComponent;
  let fixture: ComponentFixture<HomeHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHeadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
