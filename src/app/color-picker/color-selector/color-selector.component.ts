import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-selector',
  template: `
    <div id="color-selector">
      <div class="color-block" *ngFor="let color of colors" [ngClass]="{'selected': this.currentColor.value === color.value}">
        <div class="color-insert" [ngStyle]="{'background-color': color.value}"
        [title]="color.color" (click)="colorClicked(color)" >
        </div>    
      </div>
    </div>
  `,
  styleUrls: ["color-selector.component.scss"]
})
export class ColorSelectorComponent implements OnInit {
  constructor() { }
  @Input() colors: Color[] | null = [];
  @Input() currentColor: Color = { color: 'Black', value: '#000000' };
  @Output() colorSelected = new EventEmitter<Color>();
  
  ngOnInit(): void {
  }

  colorClicked(color: Color) {
    this.colorSelected.emit(color);
  }

}
