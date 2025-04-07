import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RideComponent } from './common/ride/ride.component';

export const routes: Routes = [
  {
    path: 'rides/:id',
    component: RideComponent, 
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
