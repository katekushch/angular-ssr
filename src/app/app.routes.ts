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
    loadComponent: () => import('./home/home').then(m => m.HomeComponent)
},
{
    path: 'about',
    loadComponent: () => import('./about/about').then(m => m.AboutComponent)
},
{
    path: 'contact',
    loadComponent: () => import('./contact/contact').then(m => m.ContactComponent)
},
{
    path: 'how-it-works',
    loadComponent: () => import('./how-it-works/how-it-works').then(m => m.HowItWorksComponent)
},
{
    path: 'terms',
    loadComponent: () => import('./terms/terms').then(m => m.TermsComponent)
},
{
    path: '**',
    redirectTo: 'home'
}];
