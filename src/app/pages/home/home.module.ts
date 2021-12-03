import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { RaceApiService } from 'src/app/services/race-api.service';

import { SharedModule } from 'src/app/components/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { raceReducer } from 'src/app/reducers/race.reducers';
import { RaceEffects } from 'src/app/effects/race.effects';
import { DriverEffects } from 'src/app/effects/driver.effects';
import { driverReducer } from 'src/app/reducers/driver.reducers';
import { constructorReducer } from 'src/app/reducers/constructor.reducers';
import { ConstructorsEffects } from 'src/app/effects/constructor.effects';
import {
  CONSTRUCTOR_STORE_KEY,
  DRIVER_STANDING_STORE_KEY,
  DRIVER_STORE_KEY,
  RACE_STORE_KEY,
} from 'src/app/constants/keywords.const';
import { driverStandingReducer } from 'src/app/reducers/driver-standing.reducers';
import { DriverStandingEffects } from 'src/app/effects/driver-standing.effects';
import { DriverStandingComponent } from 'src/app/components/shared/driver-standing.component';

@NgModule({
  declarations: [HomeComponent, DriverStandingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    SharedModule,
    StoreModule.forFeature(RACE_STORE_KEY, raceReducer),
    StoreModule.forFeature(DRIVER_STORE_KEY, driverReducer),
    StoreModule.forFeature(CONSTRUCTOR_STORE_KEY, constructorReducer),
    StoreModule.forFeature(DRIVER_STANDING_STORE_KEY, driverStandingReducer),
    EffectsModule.forFeature([
      RaceEffects,
      DriverEffects,
      ConstructorsEffects,
      DriverStandingEffects,
    ]),
  ],
  providers: [RaceApiService],
})
export class HomeModule {}
