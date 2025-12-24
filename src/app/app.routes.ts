import { Routes } from '@angular/router';

export const routes: Routes = [
    // Home route
    {
        path: 'home',
        loadComponent: () => import('./COMPONENTS/home/home').then((m) => m.HOME),
        title: 'Home',
    },
    // Feature routes
    {
        path: 'services',
        loadComponent: () => import('./COMPONENTS/services/services').then((m) => m.SERVICES),
        title: 'Services',
    },
    {
        path: 'work',
        loadComponent: () => import('./COMPONENTS/work/work').then((m) => m.Work),
        title: 'Work',
    },
    {
        path: 'testimonials',
        loadComponent: () => import('./COMPONENTS/testimonials/testimonials').then((m) => m.Testimonials),
        title: 'Testimonials',
    },
    {
        path: 'resume',
        loadComponent: () => import('./COMPONENTS/resume/resume').then((m) => m.RESUME),
        title: 'Resume',
    },
    {
        path: 'contact',
        loadComponent: () => import('./COMPONENTS/contact/contact').then((m) => m.CONTACT),
        title: 'Contact',
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
