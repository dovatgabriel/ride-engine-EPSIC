import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { RidesService } from '../../services/rides.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class HeaderComponent implements OnInit {
  @Output() searchValueChange = new EventEmitter<string>();
  @Output() distanceValueChange = new EventEmitter<number>();
  @Output() cityValueChange = new EventEmitter<string>();
  @Output() rideTimeChange = new EventEmitter<number>();
  searchValue = '';
  searchDistance = 0;
  searchTime = 0;
  longestRide = 0;
  shortestRide = 0;
  searchCity = '';
  longestRideTime = 0;
  shortestRideTime = 0;


  cityControl = new FormControl('');
  cityList: (string | number)[][] = [];

  constructor(private readonly ridesService: RidesService) { }

  ngOnInit(): void {
    this.ridesService.getLongestRide().subscribe((value) => {
      this.longestRide = value;
      this.searchDistance = value;
    });

    this.ridesService.getShortestRide().subscribe((value) => {
      this.shortestRide = value;
    });

    this.ridesService.getLongestTimeRide().subscribe((value) => {
      this.longestRideTime = value;
      this.searchTime = value;
    })

    this.ridesService.getShortestTimeRide().subscribe((value) => {
      this.shortestRideTime = value;
    })

    this.ridesService.getRides().subscribe((rides) => {
      this.cityList = rides.map((ride) => [
        ride.location.city,
        ride.location.npa,
      ]);
    });
  }

  onDistanceInput() {
    this.distanceValueChange.emit(this.searchDistance);
  }

  onSearchInput() {
    this.searchValueChange.emit(this.searchValue);
  }

  onCityInput() {
    this.cityValueChange.emit(this.searchCity);
  }
  onTimeInput() {
    this.rideTimeChange.emit(this.searchTime);
  }

  resetFilters(): void {
    this.searchValue = '';
    this.searchDistance = this.longestRide;
    this.searchTime = this.longestRideTime;
    this.searchCity = '';
    this.cityControl.setValue('');
  
    this.searchValueChange.emit(this.searchValue);
    this.distanceValueChange.emit(this.searchDistance);
    this.rideTimeChange.emit(this.searchTime);
    this.cityValueChange.emit(this.searchCity);
  }
  


}
