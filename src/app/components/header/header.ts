import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrls: ['./header.scss'],
    imports: [RouterLink, RouterLinkActive, TranslateModule]
})
export class HeaderComponent {
    private translate = inject(TranslateService);

    changeLanguage(lang: string) {
        this.translate.use(lang);
    }
}