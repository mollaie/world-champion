import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { RaceApiService } from 'src/app/services/race-api.service';

import { EffectsModule } from '@ngrx/effects';

import { RaceEffects } from 'src/app/effects/race.effects';
import { StoreModule } from '@ngrx/store';
import { raceReducer } from 'src/app/reducers/race.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    SharedModule,
    StoreModule.forRoot({ race: raceReducer }),
    EffectsModule.forRoot([RaceEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [RaceApiService],
})
export class HomeModule {}
