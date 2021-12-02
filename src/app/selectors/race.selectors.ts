import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RACE_STORE_KEY } from '../constants/keywords.const';
import { RaceState } from '../interfaces/race-state.interface';

/**
 * To consume data which is stored into Redux Store it's require to have selector
 * which is going to be bind Component with Store and every changes which is applying on Store on an specific State
 * Will be notify on Component
 */
export const selectRace = createFeatureSelector<RaceState>(RACE_STORE_KEY);
export const selectRaceData = createSelector(
  selectRace,
  (state: RaceState) => state
);
