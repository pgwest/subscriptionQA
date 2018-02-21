import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceWizardComponent } from './price-wizard.component';

describe('PriceWizardComponent', () => {
  let component: PriceWizardComponent;
  let fixture: ComponentFixture<PriceWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
