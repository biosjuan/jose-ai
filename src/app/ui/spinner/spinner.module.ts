import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent],
  providers: [],
})
export class SpinnerModule {}
