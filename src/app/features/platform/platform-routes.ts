import { Routes } from '@angular/router';

export const PLATFORM_ROUTES: Routes = [

    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),

        children: []
    }
];