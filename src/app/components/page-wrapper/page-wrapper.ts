import { Component } from '@angular/core';

import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
    selector: 'app-page-wrapper',
    templateUrl: './page-wrapper.html',
    styleUrls: ['./page-wrapper.scss'],
    imports: [HeaderComponent, FooterComponent]
})
export class PageWrapperComponent {
    
}