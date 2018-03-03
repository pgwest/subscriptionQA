import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PriceWizardComponent } from '../price-wizard/price-wizard.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NouisliderModule
  ],
  declarations: [PriceWizardComponent],
  exports: [PriceWizardComponent]
})
export class PriceWizardModule { }
