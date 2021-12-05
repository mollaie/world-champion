import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadedRaceAction,
  loadingRaceAction,
  loadRaceFailedAction,
} from '../actions/race.actions';

import { RaceApiService } from '../services/race-api.service';

@Injectable()
export class RaceEffects {
  constructor(private actions$: Actions, private raceApi: RaceApiService) {}

  loadRace$ = createEffect(() =>
    this.actions$.pipe(
      //Determine what type of action need to take into action
      ofType(loadingRaceAction),
      //Call rest api with set parameters
      mergeMap((action) =>
        this.raceApi.fetch(action.year, action.limit, action.offset).pipe(
          //Map the result into related action
          map((race) => loadedRaceAction({ race })),

          //Or ... if it errors return a new failure action containing the error message
          catchError((error) => of(loadRaceFailedAction({ error })))
        )
      )
    )
  );
}
