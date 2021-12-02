import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HomeModule } from './pages/home/home.module';

import { LottieModule } from 'ngx-lottie';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    LottieModule.forRoot({ player: () => import('lottie-web') }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
