import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadDriverStandingFailedAction,
  loadedDriverStandingAction,
  loadingDriverStandingAction,
} from '../actions/driver-standing.action';

import { DriverStandingApiService } from '../services/driver-standing-api.service';

@Injectable()
export class DriverStandingEffects {
  constructor(
    private actions$: Actions,
    private driverApi: DriverStandingApiService
  ) {}

  loadDrivers$ = createEffect(() =>
    this.actions$.pipe(
      //Determine what type of action need to take into action
      ofType(loadingDriverStandingAction),
      //Call rest api with set parameters
      mergeMap((action) =>
        this.driverApi.fetch(action.year, action.limit, action.offset).pipe(
          //Map the result into related action
          map((driverStanding) =>
            loadedDriverStandingAction({ driverStanding })
          ),

          //Or ... if it errors return a new failure action containing the error message
          catchError((error) => of(loadDriverStandingFailedAction({ error })))
        )
      )
    )
  );
}
