import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>My Color Picker</h1>
  <h3>Click on the color to choose a new one!</h3>
   <!-- Color Picker here -->
  `,
  styles: []
})
export class AppComponent {
  title = 'color-picker-app';
}
