import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './auth.service';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './reducers';
import { AuthEffects } from './auth.effects';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthService],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthService],
    };
  }
}
