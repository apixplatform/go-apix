import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderWaveComponent } from './page-header-wave.component';

describe('PageHeaderWaveComponent', () => {
  let component: PageHeaderWaveComponent;
  let fixture: ComponentFixture<PageHeaderWaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageHeaderWaveComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
