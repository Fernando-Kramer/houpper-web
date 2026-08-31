import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'errors',
        loadChildren: () => import('./features/errors/errors.routes').then(m => m.ERROR_ROUTES)
    },

    {
        path: '**',
        redirectTo: 'errors/not-found',
    },
];
