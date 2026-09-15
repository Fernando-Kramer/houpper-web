import { Routes } from "@angular/router";

export const WEBSITE_ROUTES: Routes = [

    {
        path: '',
        redirectTo: 'corporate',
        pathMatch: 'full'
    },

    {
        path: 'corporate',
        loadComponent: () => import('./corporate/page/home-corporate/home-corporate.component').then(m => m.HomeCorporateComponent)
    }
];