import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformToolsComponent } from './platform-tools.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PlatformToolsComponent
  ],
  providers: [],
  exports: [PlatformToolsComponent]
})
export class PlatformToolsModule {}
