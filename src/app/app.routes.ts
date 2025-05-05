import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RideDetailComponent } from './common/ride-detail/ride-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'rides/:id',
    component: RideDetailComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];