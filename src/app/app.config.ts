
 import { ApplicationConfig, LOCALE_ID } from '@angular/core';
 import { registerLocaleData } from '@angular/common';
 import localeFr from '@angular/common/locales/fr';

 registerLocaleData(localeFr);

 export const appConfig: ApplicationConfig = {
 providers: [
 // ... les providers deja presents, ne les supprimez pas
 { provide: LOCALE_ID, useValue: 'fr' }
 ]
 };
