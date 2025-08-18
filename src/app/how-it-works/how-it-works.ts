import { Component } from '@angular/core';
import { PageWrapperComponent } from "../components/page-wrapper/page-wrapper";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-how-it-works',
    templateUrl: './how-it-works.html',
    styleUrls: ['./how-it-works.scss'],
    imports: [PageWrapperComponent, TranslateModule]
})
export class HowItWorksComponent {
    
}