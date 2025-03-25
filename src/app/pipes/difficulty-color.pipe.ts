import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficultyColor',
})
export class DifficultyColorPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return '#006400';
      case 2:
        return '#228B22';
      case 3:
        return '#FFD700';
      case 4:
        return '#FF8C00';
      case 5:
        return '#FF4500';
      case 6:
        return '#DC143C';
      case 7:
        return '#B22222';
      case 8:
        return '#8B0000';
      case 9:
        return '#4B0082';
      default:
        return '#000000';
    }
  }
}
