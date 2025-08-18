import { Component } from '@angular/core';
import { PageWrapperComponent } from "../components/page-wrapper/page-wrapper";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.html',
    styleUrls: ['./about.scss'],
    imports: [PageWrapperComponent, TranslateModule]
})
export class AboutComponent {
    
}