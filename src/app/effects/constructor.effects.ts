import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadConstructorFailedAction,
  loadedConstructorAction,
  loadingConstructorAction,
} from '../actions/constructor.actions';
import { ConstructorApiService } from '../services/constructor-api.service';

@Injectable()
export class ConstructorsEffects {
  constructor(
    private actions$: Actions,
    private constructorApi: ConstructorApiService
  ) {}

  loadDrivers$ = createEffect(() =>
    this.actions$.pipe(
      //Determine what type of action need to take into action
      ofType(loadingConstructorAction),
      //Call rest api with set parameters
      mergeMap((action) =>
        this.constructorApi
          .fetch(action.year, action.limit, action.offset)
          .pipe(
            //Map the result into related action
            map((constructor) => loadedConstructorAction({ constructor })),

            //Or ... if it errors return a new failure action containing the error message
            catchError((error) => of(loadConstructorFailedAction({ error })))
          )
      )
    )
  );
}
