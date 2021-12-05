import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DRIVER_STANDING_STORE_KEY } from '../constants/keywords.const';
import { DriverStandingState } from '../interfaces/driver-standing-state.interface';

/**
 * To consume data which is stored into Redux Store it's require to have selector
 * which is going to be bind Component with Store and every changes which is applying on Store on an specific State
 * Will be notify on Component
 */
export const selectDriverStanding = createFeatureSelector<DriverStandingState>(
  DRIVER_STANDING_STORE_KEY
);
export const selectDriverStandingData = createSelector(
  selectDriverStanding,
  (state: DriverStandingState) => state
);
