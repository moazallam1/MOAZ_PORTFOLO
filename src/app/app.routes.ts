import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () => import('./COMPONENTS/home/home').then((m) => m.HOME),
        title: 'MOAZ ALLAM | Home',
    },
    {
        path: 'about',
        loadComponent: () => import('./COMPONENTS/details/details').then((m) => m.DETAILS),
        title: 'MOAZ ALLAM | About',
    },
    {
        path: 'work',
        loadComponent: () => import('./COMPONENTS/work/work').then((m) => m.Work),
        title: 'MOAZ ALLAM | Work',
    },
    {
        path: 'services',
        loadComponent: () => import('./COMPONENTS/services/services').then((m) => m.SERVICES),
        title: 'MOAZ ALLAM | Services',
    },
    {
        path: 'resume',
        loadComponent: () => import('./COMPONENTS/resume/resume').then((m) => m.RESUME),
        title: 'MOAZ ALLAM | Resume',
    },
    {
        path: 'contact',
        loadComponent: () => import('./COMPONENTS/contact/contact').then((m) => m.CONTACT),
        title: 'MOAZ ALLAM | Contact',
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
