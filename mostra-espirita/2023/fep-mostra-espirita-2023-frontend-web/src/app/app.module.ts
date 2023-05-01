import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplitPageComponent } from './views/pages/split-page/split-page.component';
import { MainPageComponent } from './views/pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SplitPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
