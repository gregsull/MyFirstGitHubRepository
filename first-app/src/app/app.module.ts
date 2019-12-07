import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { YellowComponent } from './yellow/yellow.component';

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    GreenComponent,
    YellowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
