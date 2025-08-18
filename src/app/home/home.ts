import { Component } from '@angular/core';
import { PageWrapperComponent } from "../components/page-wrapper/page-wrapper";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss'],
    imports: [PageWrapperComponent, TranslateModule],
})
export class HomeComponent {
    
}