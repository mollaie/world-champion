import { createReducer, on } from '@ngrx/store';
import {
  loadConstructorFailedAction,
  loadedConstructorAction,
  loadingConstructorAction,
} from '../actions/constructor.actions';

import { ConstructorState } from '../interfaces/constructor-state.interface';

//Initialize the first state when application launch
export const initialConstructorState: ConstructorState = {
  Constructor: {
    MRData: {
      ConstructorTable: {
        Constructors: [],
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

export const constructorReducer = createReducer(
  //Supply the initial state
  initialConstructorState,

  //Trigger loading data
  on(loadingConstructorAction, (state, { year, limit, offset }) => ({
    ...state,
    status: 'pending',
  })),

  //Handle successfully data
  on(loadedConstructorAction, (state, { constructor: Constructor }) => ({
    ...state,
    Constructor,
    error: null,
    status: 'success',
  })),

  // Handle load failure
  on(loadConstructorFailedAction, (state, { error }) => ({
    ...state,
    error,
    status: 'failed',
  }))
);
