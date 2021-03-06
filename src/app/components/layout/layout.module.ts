import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SeasonDropDownComponent } from './season-dropdown.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { LottieModule } from 'ngx-lottie';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, SeasonDropDownComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    LottieModule.forRoot({ player: () => import('lottie-web') }),
    RouterModule,
  ],
  exports: [NavbarComponent, SeasonDropDownComponent],
})
export class LayoutModule {}
