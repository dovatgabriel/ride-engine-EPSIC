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

  constructor(private readonly ridesService: RidesService) {}

  ngOnInit(): void {
    this.getRides();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery']) {
      this.getRides();
    }
  }

  getRides(): void {
    this.ridesService.getRides(this.searchQuery).subscribe((rides) => {
      this.rides = rides;
    });
  }
}
