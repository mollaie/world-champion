import { createAction, props } from '@ngrx/store';
import {
  DRIVER_STANDING_LOADED_ACTION,
  DRIVER_STANDING_LOAD_ACTION,
  DRIVER_STANDING_LOAD_ERROR_ACTION,
} from '../constants/keywords.const';
import { DriverStandingPayload } from '../interfaces/driver-standing.interface';

/**
 * Set this action while data is not loading yet
 */
export const loadingDriverStandingAction = createAction(
  DRIVER_STANDING_LOAD_ACTION,
  props<{ year: number; limit: number; offset: number }>()
);

/**
 * Set this action when data is loaded successfully
 */
export const loadedDriverStandingAction = createAction(
  DRIVER_STANDING_LOADED_ACTION,
  props<{ driverStanding: DriverStandingPayload }>()
);

/**
 * Set this action when loading data is failed and revert the error
 */
export const loadDriverStandingFailedAction = createAction(
  DRIVER_STANDING_LOAD_ERROR_ACTION,
  props<{ error: string }>()
);
