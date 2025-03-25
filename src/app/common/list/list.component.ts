import { Component, OnInit } from '@angular/core';
import { Ride } from '../../../types/ride';
import { RidesService } from '../../services/rides.service';
import { RideComponent } from '../ride/ride.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [RideComponent, NgForOf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  rides: Ride[] = [];

  constructor(private readonly ridesService: RidesService) {}

  ngOnInit(): void {
    this.ridesService.getRides().subscribe((rides) => {
      this.rides = rides;
    });
  }
}
