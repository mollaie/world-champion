import { createAction, props } from '@ngrx/store';
import {
  DRIVER_LOADED_ACTION,
  DRIVER_LOAD_ACTION,
  DRIVER_LOAD_ERROR_ACTION,
} from '../constants/keywords.const';
import { DriverPayload } from '../interfaces/driver.interface';

/**
 * Set this action while data is not loading yet
 */
export const loadingDriverAction = createAction(
  DRIVER_LOAD_ACTION,
  props<{ year: number; limit: number; offset: number }>()
);

/**
 * Set this action when data is loaded successfully
 */
export const loadedDriverAction = createAction(
  DRIVER_LOADED_ACTION,
  props<{ driver: DriverPayload }>()
);

/**
 * Set this action when loading data is failed and revert the error
 */
export const loadDriverFailedAction = createAction(
  DRIVER_LOAD_ERROR_ACTION,
  props<{ error: string }>()
);
