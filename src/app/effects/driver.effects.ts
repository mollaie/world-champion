import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadDriverFailedAction,
  loadedDriverAction,
  loadingDriverAction,
} from '../actions/driver.actions';
import { DriverApiService } from '../services/driver-api.service';

@Injectable()
export class DriverEffects {
  constructor(private actions$: Actions, private driverApi: DriverApiService) {}

  loadDrivers$ = createEffect(() =>
    this.actions$.pipe(
      //Determine what type of action need to take into action
      ofType(loadingDriverAction),
      //Call rest api with set parameters
      mergeMap((action) =>
        this.driverApi.fetch(action.year, action.limit, action.offset).pipe(
          //Map the result into related action
          map((driver) => loadedDriverAction({ driver })),

          //Or ... if it errors return a new failure action containing the error message
          catchError((error) => of(loadDriverFailedAction({ error })))
        )
      )
    )
  );
}
