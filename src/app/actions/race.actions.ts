import { createAction, props } from '@ngrx/store';
import {
  RACE_LOADED_ACTION,
  RACE_LOAD_ACTION,
  RACE_LOAD_ERROR_ACTION,
} from '../constants/keywords.const';
import { RacePayload } from '../interfaces/race.interface';

/**
 * Set this action while data is not loading yet
 */
export const loadingRaceAction = createAction(
  RACE_LOAD_ACTION,
  props<{ year: number; limit: number; offset: number }>()
);

/**
 * Set this action when data is loaded successfully
 */
export const loadedRaceAction = createAction(
  RACE_LOADED_ACTION,
  props<{ race: RacePayload }>()
);

/**
 * Set this action when loading data is failed and revert the error
 */
export const loadRaceFailedAction = createAction(
  RACE_LOAD_ERROR_ACTION,
  props<{ error: string }>()
);
