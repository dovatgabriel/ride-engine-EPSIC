import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { ListComponent } from '../../common/list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchBarValue = '';
  distanceBarValue = 0;

  onDistanceValueReceived(distanceValue: number){
    this.distanceBarValue = distanceValue;
    console.log(this.distanceBarValue);
  }

  onSearchValueReceived(searchValue: string) {
    this.searchBarValue = searchValue;
  }
}
