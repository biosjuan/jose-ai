import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
