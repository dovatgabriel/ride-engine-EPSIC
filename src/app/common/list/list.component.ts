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
  @Input() distanceQuery = 0;
  @Input() cityQuery = '';
  @Input() timeQuery = 0;

  rides: Ride[] = [];
  allRides: Ride[] = [];

  constructor(private readonly ridesService: RidesService) {}

  ngOnInit(): void {
    this.getRides();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['searchQuery'] ||
      changes['distanceQuery'] ||
      changes['cityQuery'] ||
      changes['timeQuery']
    ) {
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
    this.rides = this.allRides.filter((ride) => {
      const matchesQuery = this.searchQuery
        ? ride.title.toLowerCase().startsWith(this.searchQuery.toLowerCase())
        : true;

      const matchesDistance =
        this.distanceQuery > 0 ? ride.length <= this.distanceQuery : true;

      const matchesTime =
        this.timeQuery > 0 ? ride.duration <= this.timeQuery : true;

      const matchesCity = this.cityQuery
        ? ride.location.city
            .toLowerCase()
            .startsWith(this.cityQuery[0].toLowerCase())
        : true;

      return matchesQuery && matchesDistance && matchesCity && matchesTime;
    });
  }
}
