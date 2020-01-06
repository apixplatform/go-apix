import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNowBoxComponent } from './start-now-box.component';

describe('StartNowBoxComponent', () => {
  let component: StartNowBoxComponent;
  let fixture: ComponentFixture<StartNowBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StartNowBoxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartNowBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
