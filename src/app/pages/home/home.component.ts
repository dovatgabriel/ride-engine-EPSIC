import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { ListComponent } from '../../common/list/list.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
