import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { metaReducers, reducers } from './reducers';
import { LoadingIndicatorInterceptor } from './services/loading-indicator-interceptor.service';
import { MaterialModule } from './material/material.module';
import { SpinnerModule } from './ui/spinner/spinner.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SpinnerModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot(),
    EntityDataModule.forRoot(entityConfig),
    EffectsModule.forRoot([]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingIndicatorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
