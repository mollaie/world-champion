import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ABOUT_ROUTES } from './ABOUT_ROUTES';
import { AboutComponent } from './about.component';
import { LottieModule } from 'ngx-lottie';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ABOUT_ROUTES),
    LottieModule.forRoot({ player: () => import('lottie-web') }),
  ],
})
export class AboutModule {}
