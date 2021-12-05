import { createReducer, on } from '@ngrx/store';
import {
  loadDriverStandingFailedAction,
  loadedDriverStandingAction,
  loadingDriverStandingAction,
} from '../actions/driver-standing.action';
import { DriverStandingState } from '../interfaces/driver-standing-state.interface';

//Initialize the first state when application launch
export const initialDriverStandingState: DriverStandingState = {
  DriverStanding: {
    MRData: {
      StandingsTable: {
        StandingsLists: [],
        season: '',
      },
      limit: '0',
      offset: '0',
      series: '',
      total: '',
      url: '',
      xmlns: '',
    },
  },
  status: 'pending',
};

export const driverStandingReducer = createReducer(
  //Supply the initial state
  initialDriverStandingState,

  //Trigger loading data
  on(loadingDriverStandingAction, (state, { year, limit, offset }) => ({
    ...state,
    status: 'pending',
  })),

  //Handle successfully data
  on(
    loadedDriverStandingAction,
    (state, { driverStanding: DriverStanding }) => ({
      ...state,
      DriverStanding,
      error: null,
      status: 'success',
    })
  ),

  // Handle load failure
  on(loadDriverStandingFailedAction, (state, { error }) => ({
    ...state,
    error,
    status: 'failed',
  }))
);
