import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { HowItWorksComponent } from './how-it-works/how-it-works';
import { TermsComponent } from './terms/terms';

export const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'about',
    component: AboutComponent
},
{
    path: 'contact',
    component: ContactComponent
},
{
    path: 'how-it-works',
    component: HowItWorksComponent
},
{
    path: 'terms',
    component: TermsComponent
},
{
    path: '**',
    redirectTo: 'home'
}];
