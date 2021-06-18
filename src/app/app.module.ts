import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorService } from './services/color.service';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorSelectorComponent } from './color-picker/color-selector/color-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ColorSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
