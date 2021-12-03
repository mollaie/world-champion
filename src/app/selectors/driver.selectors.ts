import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DRIVER_STORE_KEY } from '../constants/keywords.const';
import { DriverState } from '../interfaces/driver-state.interface';

/**
 * To consume data which is stored into Redux Store it's require to have selector
 * which is going to be bind Component with Store and every changes which is applying on Store on an specific State
 * Will be notify on Component
 */
export const selectDriver =
  createFeatureSelector<DriverState>(DRIVER_STORE_KEY);
export const selectDriverData = createSelector(
  selectDriver,
  (state: DriverState) => state
);
