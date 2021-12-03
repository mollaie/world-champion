import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CONSTRUCTOR_STORE_KEY } from '../constants/keywords.const';
import { ConstructorState } from '../interfaces/constructor-state.interface';

/**
 * To consume data which is stored into Redux Store it's require to have selector
 * which is going to be bind Component with Store and every changes which is applying on Store on an specific State
 * Will be notify on Component
 */
export const selectConstructor = createFeatureSelector<ConstructorState>(
  CONSTRUCTOR_STORE_KEY
);
export const selectConstructorData = createSelector(
  selectConstructor,
  (state: ConstructorState) => state
);
