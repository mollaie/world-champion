import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { loadingRaceAction } from '../actions/race.actions';
import { loadingDriverAction } from '../actions/driver.actions';
import { AppState } from '../app.state';
import { loadingConstructorAction } from '../actions/constructor.actions';

const default_year = environment.beginning_year;
const default_limit = environment.page_limit;
const default_offset = environment.page_limit;

@Injectable({
  providedIn: 'root',
})
export class SeasonHelperService {
  constructor(private readonly store: Store<AppState>) {}

  /**
   * To be able to call dispatch from different section of application it moved here as shared service across all components and other services
   * params is dynamic parameters values which is included year, limit and offset
   * Per each user is able to set or leave it blank
   * In case of blank / undefined value for each of them will replace with considered default value
   * @param params
   * @returns
   */
  onLoad = (params?: { year?: number; offset?: number; limit?: number }) => {
    //Dispatch Races
    this.store.dispatch(
      loadingRaceAction({
        year: params?.year ? params.year : default_year,
        limit: params?.limit ? params.limit : default_limit,
        offset: params?.offset ? params.offset : default_offset,
      })
    );

    //Dispatch Drivers
    this.store.dispatch(
      loadingDriverAction({
        year: params?.year ? params.year : default_year,
        limit: params?.limit ? params.limit : default_limit,
        offset: params?.offset ? params.offset : default_offset,
      })
    );

    //Dispatch Constructors
    this.store.dispatch(
      loadingConstructorAction({
        year: params?.year ? params.year : default_year,
        limit: params?.limit ? params.limit : default_limit,
        offset: params?.offset ? params.offset : default_offset,
      })
    );
  };
}
