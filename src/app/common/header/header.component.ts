import { Component } from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {NgOptimizedImage} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatInput,
    MatIconButton,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchValue: string = '';

  constructor() {}

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  handleInput(event: Event): void {
    this.searchValue = (event.target as HTMLInputElement).value;
  }

  search(): void {
    alert(this.searchValue);
  }
}
