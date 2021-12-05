import { createAction, props } from '@ngrx/store';
import {
  CONSTRUCTOR_LOADED_ACTION,
  CONSTRUCTOR_LOAD_ACTION,
  CONSTRUCTOR_LOAD_ERROR_ACTION,
} from '../constants/keywords.const';
import { ConstructorPayload } from '../interfaces/constructor.interface';

/**
 * Set this action while data is not loading yet
 */
export const loadingConstructorAction = createAction(
  CONSTRUCTOR_LOAD_ACTION,
  props<{ year: number; limit: number; offset: number }>()
);

/**
 * Set this action when data is loaded successfully
 */
export const loadedConstructorAction = createAction(
  CONSTRUCTOR_LOADED_ACTION,
  props<{ constructor: ConstructorPayload }>()
);

/**
 * Set this action when loading data is failed and revert the error
 */
export const loadConstructorFailedAction = createAction(
  CONSTRUCTOR_LOAD_ERROR_ACTION,
  props<{ error: string }>()
);
