import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ScrollingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' } as MatFormFieldDefaultOptions,
    },
  ],
})
export class MaterialModule {}
