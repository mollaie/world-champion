import { createReducer, on } from '@ngrx/store';
import {
  loadedRaceAction,
  loadingRaceAction,
  loadRaceFailedAction,
} from '../actions/race.actions';
import { RaceState } from '../interfaces/race-state.interface';

//Initialize the first state when application launch
export const initialRaceState: RaceState = {
  Race: {
    MRData: {
      RaceTable: {
        Races: [],
        season: '',
      },
      limit: '0',
      offset: '0',
      series: '',
      total: '0',
      url: '',
      xmlns: '',
    },
  },
  status: 'pending',
};

export const raceReducer = createReducer(
  //Supply the initial state
  initialRaceState,

  //Trigger loading data
  on(loadingRaceAction, (state, { year, limit, offset }) => ({
    ...state,
    status: 'pending',
  })),

  //Handle successfully data
  on(loadedRaceAction, (state, { race: Race }) => ({
    ...state,
    Race,
    error: null,
    status: 'success',
  })),

  // Handle load failure
  on(loadRaceFailedAction, (state, { error }) => ({
    ...state,
    error,
    status: 'failed',
  }))
);
