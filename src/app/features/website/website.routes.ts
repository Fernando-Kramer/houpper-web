import { Routes } from "@angular/router";

export const WEBSITE_ROUTES: Routes = [

    {
        path: '',
        redirectTo: 'corporate',
        pathMatch: 'full'
    },

    {
        path: 'corporate',
        loadComponent: () => import('./pages/corporate/corporate.component').then(m => m.CorporateComponent)
    }
];