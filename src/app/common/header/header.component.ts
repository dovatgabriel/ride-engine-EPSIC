import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatOption } from '@angular/material/select';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';

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
export class HeaderComponent {
  @Output() searchValueChange = new EventEmitter<string>();
  searchValue = '';

  onSearchInput() {
    this.searchValueChange.emit(this.searchValue);
  }
}
