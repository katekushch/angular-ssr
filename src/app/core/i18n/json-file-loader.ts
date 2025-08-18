import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

// Import your translation files
import enTranslations from '../../../../public/i18n/en.json';
import esTranslations from '../../../../public/i18n/es.json';
import tlTranslations from '../../../../public/i18n/tl.json';

@Injectable({
    providedIn: 'root'
})
export class JsonFileLoader implements TranslateLoader {
    private translations: { [key: string]: any } = {
        'en': enTranslations,
        'es': esTranslations,
        'tl': tlTranslations
    };

    getTranslation(lang: string): Observable<any> {
        // Return the imported translations for the requested language
        const translation = this.translations[lang];

        if (translation) {
            return of(translation);
        }

        // Fallback to empty object if language not found
        return of({});
    }
}
