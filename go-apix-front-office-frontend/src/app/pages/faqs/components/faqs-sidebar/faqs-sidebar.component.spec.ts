import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsSidebarComponent } from './faqs-sidebar.component';

describe('FaqsSidebarComponent', () => {
  let component: FaqsSidebarComponent;
  let fixture: ComponentFixture<FaqsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FaqsSidebarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
