import { Component } from '@angular/core';
import { PageWrapperComponent } from "../components/page-wrapper/page-wrapper";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.scss'],
    imports: [PageWrapperComponent, TranslateModule]
})
export class ContactComponent {
    
}