import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Color {
  color: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  getColorsFromApi(): Observable<Color[]> {
    return of([
      { color: 'Black', value: '#000000' },
      { color: 'White', value: '#FFFFFF' },
      { color: 'Silver', value: '#C0C0C0' },
      { color: 'Gray', value: '#808080' },
      { color: 'Red', value: '#FF0000' },
      { color: 'Maroon', value: '#800000' },
      { color: 'Yellow', value: '#FFFF00' },
      { color: 'Olive', value: '#808000' },
      { color: 'Lime', value: '#00FF00' },
      { color: 'Green', value: '#008000' },
      { color: 'Aqua', value: '#00FFFF' },
      { color: 'Teal', value: '#008080' },
      { color: 'Blue', value: '#0000FF' },
      { color: 'Navy', value: '#000080' },
      { color: 'Fuchsia', value: '#FF00FF' },
      { color: 'Purple', value: '#800080' }
    ])
  }
}
