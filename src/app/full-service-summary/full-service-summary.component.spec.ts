import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullServiceSummaryComponent } from './full-service-summary.component';

describe('FullServiceSummaryComponent', () => {
  let component: FullServiceSummaryComponent;
  let fixture: ComponentFixture<FullServiceSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullServiceSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullServiceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
