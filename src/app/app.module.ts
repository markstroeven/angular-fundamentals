import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AwesomeBoxComponent} from './awesome-box/awesome-box.component';
import {AwesomeBarModule} from './awesome-bar/awesome-bar.module';

@NgModule({
  declarations: [
    AppComponent,
    AwesomeBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AwesomeBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
