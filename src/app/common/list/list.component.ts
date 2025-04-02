import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Ride } from '../../../types/ride';
import { RidesService } from '../../services/rides.service';
import { RideComponent } from '../ride/ride.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RideComponent, NgForOf],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnChanges {
  @Input() searchQuery = '';
  rides: Ride[] = [];
  allRides: Ride[] = [];

  constructor(private readonly ridesService: RidesService) {}

  ngOnInit(): void {
    this.getRides();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery']) {
      this.filterRides();
    }
  }

  getRides(): void {
    this.ridesService.getRides().subscribe((rides) => {
      this.allRides = rides;
      this.filterRides();
    });
  }

  filterRides(): void {
    if (this.searchQuery) {
      this.rides = this.allRides.filter((ride) =>
        ride.title.toLowerCase().startsWith(this.searchQuery.toLowerCase()),
      );
    } else {
      this.rides = [...this.allRides];
    }
  }
}
