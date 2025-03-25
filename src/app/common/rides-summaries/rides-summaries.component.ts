import { Component, OnInit } from '@angular/core';
import { RidesService } from '../../services/rides.service';
import { Ride } from '../../../types/ride';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-rides-summaries',
  imports: [NgForOf],
  templateUrl: './rides-summaries.component.html',
  styleUrl: './rides-summaries.component.scss',
})
export class RidesSummariesComponent implements OnInit {
  rides: Ride[] = [];

  constructor(private ridesService: RidesService) {}

  ngOnInit() {
    this.ridesService.getRides().subscribe((rides) => {
      console.log(rides);
      this.rides = rides;
    });
  }
}
