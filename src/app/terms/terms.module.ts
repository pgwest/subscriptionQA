import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from '../terms/terms.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TermsComponent],
  declarations: [TermsComponent]
})
export class TermsModule { }
