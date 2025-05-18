import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Ride } from '../../../types/ride';
import { RidesService } from '../../services/rides.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DifficultyColorPipe } from '../../pipes/difficulty-color.pipe';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-ride-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    DifficultyColorPipe,
    MatTabGroup,
    MatTab,
    MapComponent,
  ],
  templateUrl: './ride-detail.component.html',
  styleUrl: './ride-detail.component.scss',
})
export class RideDetailComponent implements OnInit {
  ride: Ride | undefined;
  loading = true;
  error = false;
  currentImageIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private ridesService: RidesService,
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
          console.error(
            'Erreur lors du chargement des détails de la balade:',
            err,
          );
          this.error = true;
          this.loading = false;
        },
      });
    } else {
      this.error = true;
      this.loading = false;
    }
  }

  get backgroundImage(): string {
    return this.ride?.banner ? `url(${this.ride.banner})` : 'none';
  }
  goToImage(index: number): void {
    this.currentImageIndex = index;
  }

  nextImage(): void {
    if (this.ride?.images && this.ride.images.length > 0) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.ride.images.length;
    }
  }

  previousImage(): void {
    if (this.ride?.images && this.ride.images.length > 0) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.ride.images.length) %
        this.ride.images.length;
    }
  }

  get currentImage(): string | undefined {
    if (this.ride?.images && this.ride.images.length > 0) {
      return this.ride.images[this.currentImageIndex];
    }
    return undefined;
  }
}
