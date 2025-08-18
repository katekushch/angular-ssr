import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes';
import { provideTranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { JsonFileLoader } from './core/i18n/json-file-loader';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideTranslateService({
      loader: provideTranslateLoader(JsonFileLoader),
      fallbackLang: 'en'
    })
  ]
};
