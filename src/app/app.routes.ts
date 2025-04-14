import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'plants',
    loadComponent: () => import('./pages/plants/plants.page').then( m => m.PlantsPage)
  },
];
