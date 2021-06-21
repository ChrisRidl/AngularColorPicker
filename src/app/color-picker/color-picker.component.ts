import { Component, OnInit } from '@angular/core';
import { Color, ColorService } from '../services/color.service';

@Component({
  selector: 'app-color-picker',
  template: `
    <div id="color-selector">
      <div id="selected-color-button" (click)="showColorSelector = !showColorSelector">
        <div class="selected-color" [ngStyle]="{'background-color': selectedColor.value}"
              [title]="selectedColor.color">
        </div>
      </div>
      <div id="selected-color-details">
        <div class="color-name" [ngStyle]="{'color': selectedColor.value}">{{selectedColor.color}}</div>
        <div class="color-value">{{selectedColor.value | uppercase}}</div>
      </div>
    </div>
    <app-color-selector [colors]="this.colorService.getColorsFromApi() | async" [currentColor]="selectedColor" (colorSelected)="setSelectedColor($event)" *ngIf="showColorSelector"></app-color-selector>
  `,
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  selectedColor: Color = { color: 'Black', value: '#000000' };
  showColorSelector = false;
  constructor(public colorService: ColorService) { }

  ngOnInit(): void {
  }

  setSelectedColor(color: Color) {
    this.selectedColor = color;
    this.showColorSelector = !this.showColorSelector;
  }

}
