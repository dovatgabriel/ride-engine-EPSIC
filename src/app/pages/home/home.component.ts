import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { HeaderComponent } from '../../common/header/header.component';
import { RidesSummariesComponent } from '../../common/rides-summaries/rides-summaries.component';

@Component({
  selector: 'app-home',
  imports: [MatInput, HeaderComponent, RidesSummariesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
