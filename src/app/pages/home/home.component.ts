import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadingRaceAction } from 'src/app/actions/race.actions';
import { AppState } from 'src/app/app.state';
import { RaceState } from 'src/app/interfaces/race-state.interface';
import { MRData, RacePayload } from 'src/app/interfaces/race.interface';
import {
  IDataSet,
  ITableDataContract,
} from 'src/app/interfaces/table-dataset.interface';
import { selectRaceData } from 'src/app/selectors/race.selectors';
import { environment } from 'src/environments/environment';
import { RACE_TABLE_SCHEMA } from './RACE_TABLE_SCHEMA';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  races$ = this.store.select(selectRaceData);
  dataset: IDataSet = {
    schema: RACE_TABLE_SCHEMA,
  };

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.onLoad();
  }

  onSeasonChanged = (year: number) => this.onLoad(year);

  onLoad = (year: number = environment.beginning_year) => {
    this.store.dispatch(
      loadingRaceAction({
        year,
        limit: environment.page_limit,
        offset: environment.page_limit,
      })
    );

    this.dataset = {
      ...this.dataset,
      data$: <Observable<ITableDataContract>>this.races$.pipe(
        map((race: RaceState) => race.Race),
        map((race: RacePayload) => race.MRData),
        map((mrData: MRData) => {
          return <ITableDataContract | unknown>{
            data: mrData.RaceTable.Races.map((data) => {
              return {
                ...data,
                country: data?.Circuit?.Location?.country,
                locality: data?.Circuit?.Location?.locality,
              };
            }),
            limit: mrData.limit,
            offset: mrData.offset,
            total: mrData.total,
          };
        })
      ),
    };
  };
}
