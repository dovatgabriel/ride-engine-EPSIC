import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Ride } from '../../../types/ride';
import { RidesService } from '../../services/rides.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ride-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './ride-detail.component.html',
  styleUrl: './ride-detail.component.scss'
})
export class RideDetailComponent implements OnInit {
  ride: Ride | undefined;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private ridesService: RidesService
  ) {}

  ngOnInit(): void {
    this.getRideDetails();
  }

  getRideDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.ridesService.getRideById(id).subscribe({
        next: (ride) => {
          this.ride = ride;
          this.loading = false;
        },
        error: (err) => {
          console.error('Erreur lors du chargement des détails de la balade:', err);
          this.error = true;
          this.loading = false;
        }
      });
    } else {
      this.error = true;
      this.loading = false;
    }
  }

  get backgroundImage(): string {
    return this.ride?.banner ? `url(${this.ride.banner})` : 'none';
  }
}