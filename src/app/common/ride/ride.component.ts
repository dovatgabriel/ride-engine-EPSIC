import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Ride } from '../../../types/ride';
import { DifficultyColorPipe } from '../../pipes/difficulty-color.pipe';

@Component({
  selector: 'app-ride',
  standalone: true,
  imports: [
    CommonModule, DifficultyColorPipe
  ],
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
