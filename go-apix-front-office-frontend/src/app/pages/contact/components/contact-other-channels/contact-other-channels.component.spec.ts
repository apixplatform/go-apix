import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOtherChannelsComponent } from './contact-other-channels.component';

describe('ContactOtherChannelsComponent', () => {
  let component: ContactOtherChannelsComponent;
  let fixture: ComponentFixture<ContactOtherChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactOtherChannelsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactOtherChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
