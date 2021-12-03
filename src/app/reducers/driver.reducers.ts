import { createReducer, on } from '@ngrx/store';
import {
  loadDriverFailedAction,
  loadedDriverAction,
  loadingDriverAction,
} from '../actions/driver.actions';
import { DriverState } from '../interfaces/driver-state.interface';

//Initialize the first state when application launch
export const initialDriverState: DriverState = {
  Driver: {
    MRData: {
      DriverTable: {
        season: '',
        Drivers: [],
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

export const driverReducer = createReducer(
  //Supply the initial state
  initialDriverState,

  //Trigger loading data
  on(loadingDriverAction, (state, { year, limit, offset }) => ({
    ...state,
    status: 'pending',
  })),

  //Handle successfully data
  on(loadedDriverAction, (state, { driver: Driver }) => ({
    ...state,
    Driver,
    error: null,
    status: 'success',
  })),

  // Handle load failure
  on(loadDriverFailedAction, (state, { error }) => ({
    ...state,
    error,
    status: 'failed',
  }))
);
