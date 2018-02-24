import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PriceWizardComponent } from '../price-wizard/price-wizard.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PriceWizardComponent],
  exports: [PriceWizardComponent]
})
export class PriceWizardModule { }
