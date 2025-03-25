import { Component, Input } from '@angular/core';
import { Ride } from '../../../types/ride';
import { DifficultyColorPipe } from '../../pipes/difficulty-color.pipe';

@Component({
  selector: 'app-ride',
  imports: [DifficultyColorPipe],
  templateUrl: './ride.component.html',
  styleUrl: './ride.component.scss',
})
export class RideComponent {
  @Input() ride: Ride | undefined;
}
