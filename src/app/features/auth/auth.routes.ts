import { Routes } from "@angular/router";

export const AUTH_ROUTES: Routes = [

    {
        path: '',
        loadComponent: () => import('./pages/auth-main/auth-main.component').then(m => m.AuthMainComponent),

        children: [

            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },

            {
                path: 'login',
                loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
            }
        ]
    }
];