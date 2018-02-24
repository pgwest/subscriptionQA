import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from '../support/support.component';

import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';


@NgModule({
  imports: [
    CommonModule,
    JWBootstrapSwitchModule
  ],
  declarations: [SupportComponent],
  exports: [SupportComponent]
})
export class SupportModule { }
 
