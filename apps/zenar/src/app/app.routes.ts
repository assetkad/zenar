import { Route } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(
        (module) => module.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (module) => module.RegisterComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(
        (module) => module.HomeComponent
      ),
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () =>
      import('./pages/termsAndConditions/termsAndConditions.component').then(
        (module) => module.TermsAndConditionsComponent
      ),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/privacy/privacy.component').then(
        (module) => module.PrivacyComponent
      ),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/faq/faq.component').then((module) => module.FaqComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(
        (module) => module.AboutComponent
      ),
  },
  {
    path: 'how-it-works',
    loadComponent: () =>
      import('./pages/howItWorks/howItWorks.component').then(
        (module) => module.HowItWorksComponent
      ),
  },
  {
    path: 'coverage-plans',
    loadComponent: () =>
      import('./pages/coverage-plans/coverage-plans.component').then(
        (module) => module.CoveragePlansComponent
      ),
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
