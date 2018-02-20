import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformToolsComponent } from './platform-tools.component';

describe('PlatformToolsComponent', () => {
  let component: PlatformToolsComponent;
  let fixture: ComponentFixture<PlatformToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
