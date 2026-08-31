import { Routes } from '@angular/router';

export const ERROR_ROUTES: Routes = [

    {
        path: '', 
        redirectTo: 'not-found', 
        pathMatch: 'full'
    },

    {
        path: 'not-found',
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    },

    {
        path: 'service-unavailable',
        loadComponent: () => import('./pages/service-unavailable/service-unavailable.component').then(m => m.ServiceUnavailableComponent)
    }
];