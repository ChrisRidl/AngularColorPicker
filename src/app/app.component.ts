import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>My Color Picker</h1>
  <h3>Click the color to choose a new one!</h3>
   <app-color-picker></app-color-picker>
  `,
  styles: []
})
export class AppComponent {
  title = 'color-picker-app';
}
