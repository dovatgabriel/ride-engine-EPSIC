import { Component } from '@angular/core';
import {MatInput} from '@angular/material/input';
import {HeaderComponent} from '../../common/header/header.component';

@Component({
  selector: 'app-home',
  imports: [
    MatInput,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
