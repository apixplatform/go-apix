import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsOtherChannelsComponent } from './faqs-other-channels.component';

describe('FaqsOtherChannelsComponent', () => {
  let component: FaqsOtherChannelsComponent;
  let fixture: ComponentFixture<FaqsOtherChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FaqsOtherChannelsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsOtherChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
