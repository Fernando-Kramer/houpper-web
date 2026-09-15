import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./features/website/website.routes').then(m => m.WEBSITE_ROUTES)
    },

    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },

    {
        path: 'home',
        loadChildren: () => import('./features/platform/platform-routes').then(m => m.PLATFORM_ROUTES)
    },

    {
        path: 'error',
        loadChildren: () => import('./features/errors/errors.routes').then(m => m.ERROR_ROUTES)
    },

    {
        path: '**',
        redirectTo: 'error'
    }
];