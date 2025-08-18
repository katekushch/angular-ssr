import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrls: ['./header.scss'],
    imports: [RouterLink, RouterLinkActive]
})
export class HeaderComponent {
    private translate = inject(TranslateService);

    changeLanguage(lang: string) {
        this.translate.use(lang);
    }
}