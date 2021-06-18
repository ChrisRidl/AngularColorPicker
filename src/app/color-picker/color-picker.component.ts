import { Component, OnInit } from '@angular/core';
import { Color } from '../services/color.service';

@Component({
  selector: 'app-color-picker',
  template: `
    <div id="color-selector">
      <div id="selected-color-button">
        <div class="selected-color" [ngStyle]="{'background-color': selectedColor.value}"
              [title]="selectedColor.color">
        </div>
      </div>
      <div id="selected-color-details">
        <div class="color-name" [ngStyle]="{'color': selectedColor.value}">{{selectedColor.color}}</div>
        <div class="color-value">{{selectedColor.value | uppercase}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  selectedColor: Color = {color: 'Red', value: '#ff0000'};
  showSelector = false;
  constructor() { }

  ngOnInit(): void {
  }

}
