import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatOption } from '@angular/material/select';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { RidesService } from '../../services/rides.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatIcon,
    MatInput,
    MatIconButton,
    FormsModule,
    MatMenuTrigger,
    MatMenu,
    MatFormField,
    MatOption,
    MatSlider,
    MatSliderThumb,
  ],
})
export class HeaderComponent implements OnInit {
  @Output() searchValueChange = new EventEmitter<string>();
  @Output() distanceValueChange = new EventEmitter<number>();
  searchValue = '';
  searchDistance = 0;
  longestRide = 0;
  shortestRide = 0;

  constructor(private readonly ridesService: RidesService) {}

  ngOnInit(): void {
    this.ridesService.getLongestRide().subscribe((value) => {
      this.longestRide = value;
      this.searchDistance = value;
    });

    this.ridesService.getShortestRide().subscribe((value) => {
      this.shortestRide = value;
    });
  }

  onDistanceInput() {
    this.distanceValueChange.emit(this.searchDistance);
    console.log(this.searchDistance);
  }

  onSearchInput() {
    this.searchValueChange.emit(this.searchValue);
  }
}
