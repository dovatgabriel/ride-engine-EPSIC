import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Ride } from '../../../types/ride';
import { DifficultyColorPipe } from '../../pipes/difficulty-color.pipe';

@Component({
  selector: 'app-ride',
  standalone: true,
  imports: [DifficultyColorPipe],
  templateUrl: './ride.component.html',
  styleUrl: './ride.component.scss',
})
export class RideComponent {
  @Input() ride: Ride | undefined;

  constructor(private router: Router) {}

  goToDetail(): void {
    if (this.ride) {
      this.router.navigate(['/rides', this.ride.id]);
    }
  }
}
