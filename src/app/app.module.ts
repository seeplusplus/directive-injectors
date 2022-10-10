import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './number-display.component';
import { PowerOfTwoDirective } from './power-of-two.directive';
import { EvenNumberDirective } from './evens.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, PowerOfTwoDirective, EvenNumberDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
