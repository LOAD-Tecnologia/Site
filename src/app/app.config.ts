// Angular
import {provideRouter} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// App
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      BrowserModule,
      BrowserAnimationsModule
    ])
  ]
};
