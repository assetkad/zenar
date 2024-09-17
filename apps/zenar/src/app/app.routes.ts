import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
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
];
