import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Ride } from '../../../types/ride';

@Component({
  selector: 'app-ride',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ride.component.html',
  styleUrl: './ride.component.scss',
})
export class RideComponent {
  @Input() ride: Ride | undefined;

  constructor(private router: Router) {}

  get backgroundImage(): string {
    return this.ride?.banner ? `url(${this.ride.banner})` : 'none';
  }

  goToDetail(): void {
    if (this.ride?.id) {
      this.router.navigate(['/rides', this.ride.id]);
    }
  }
}
