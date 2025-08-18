import { Component } from '@angular/core';
import { PageWrapperComponent } from "../components/page-wrapper/page-wrapper";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-terms',
    templateUrl: './terms.html',
    styleUrls: ['./terms.scss'],
    imports: [PageWrapperComponent, TranslateModule]
})
export class TermsComponent {
    
}