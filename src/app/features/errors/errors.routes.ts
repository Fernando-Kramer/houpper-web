import { Routes } from "@angular/router";

export const ERROR_ROUTES: Routes = [

    {
        path: '',
        loadComponent: () => import('./pages/error/error.component').then(m => m.ErrorComponent),

        children: [

            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'not-found'
            },

            {
                path: 'not-found',
                loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
            }
        ]
    }
];