import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatOption } from '@angular/material/select';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatInput,
    MatIconButton,
    FormsModule,
    MatMenuTrigger,
    MatMenu,
    MatFormField,
    MatFormField,
    MatOption,
    MatFormField,
    MatSlider,
    MatSliderThumb,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() searchValue = new EventEmitter<string>();
}
