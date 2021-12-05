import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { ConstructorState } from 'src/app/interfaces/constructor-state.interface';
import {
  ConstructorPayload,
  MRData as ConstructorMrData,
} from 'src/app/interfaces/constructor.interface';
import { DriverState } from 'src/app/interfaces/driver-state.interface';
import {
  DriverPayload,
  MRData as DriverMrData,
} from 'src/app/interfaces/driver.interface';
import { RaceState } from 'src/app/interfaces/race-state.interface';
import { MRData, RacePayload } from 'src/app/interfaces/race.interface';

import {
  IDataSet,
  ITableDataContract,
  ITableSchema,
} from 'src/app/interfaces/table-dataset.interface';
import { selectConstructorData } from 'src/app/selectors/constructor.selector';
import { selectDriverStandingData } from 'src/app/selectors/driver-standing.selector';
import { selectDriverData } from 'src/app/selectors/driver.selectors';
import { selectRaceData } from 'src/app/selectors/race.selectors';
import { SeasonHelperService } from 'src/app/services/season-helper.service';
import { CONSTRUCTOR_TABLE_SCHEMA } from './table_schema/CONSTRUCTOR_TABLE_SCHEMA';
import { DRIVER_TABLE_SCHEMA } from './table_schema/DRIVER_TABLE_SCHEMA';
import { RACE_TABLE_SCHEMA } from './table_schema/RACE_TABLE_SCHEMA';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  races$ = this.store.select(selectRaceData);
  drivers$ = this.store.select(selectDriverData);
  constructors$ = this.store.select(selectConstructorData);
  driverStanding$ = this.store.select(selectDriverStandingData);

  raceDataset: IDataSet = {
    schema: RACE_TABLE_SCHEMA,
  };

  driverDataset: IDataSet = {
    schema: DRIVER_TABLE_SCHEMA,
  };

  constructorDataset: IDataSet = {
    schema: CONSTRUCTOR_TABLE_SCHEMA,
  };

  constructor(
    private readonly store: Store<AppState>,
    private readonly seasonHelper: SeasonHelperService
  ) {}

  ngOnInit(): void {
    this.onLoad();
  }

  /**
   * Handover values of offset and limit which is retrieve from custom table to onLoad method
   * @param event
   * @returns
   */
  onPageChange = (event: { offset: number; limit: number }) =>
    this.onLoad({ ...event });

  /**
   * This method is suppose to call onLoad method from Season Helper in case of populate values for default year on component init
   * Also and data parsing on result set (the Observable object which is retrieving from Store) before hand it over to table
   * @param params
   */
  onLoad = (params?: { year?: number; offset?: number; limit?: number }) => {
    this.seasonHelper.onLoad({ ...params });

    //Map race's data before handover to table
    this.raceDataset = {
      ...this.raceDataset,
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

    //Map driver's data before handover to table
    this.driverDataset = {
      ...this.driverDataset,
      data$: <Observable<ITableDataContract>>this.drivers$.pipe(
        map((driver: DriverState) => driver.Driver),
        map((driver: DriverPayload) => driver.MRData),
        map((driver) => {
          return <ITableDataContract | unknown>{
            data: driver.DriverTable.Drivers.map((data) => {
              return {
                ...data,
                name: `${data?.givenName}  ${data?.familyName}`,
              };
            }),
            limit: driver.limit,
            offset: driver.offset,
            total: driver.total,
          };
        })
      ),
    };

    //Map constructor's data before handover to table
    this.constructorDataset = {
      ...this.constructorDataset,
      data$: <Observable<ITableDataContract>>this.constructors$.pipe(
        map((constructor: ConstructorState) => constructor.Constructor),
        map((constructor: ConstructorPayload) => constructor.MRData),
        map((constructor) => {
          return <ITableDataContract | unknown>{
            data: constructor.ConstructorTable.Constructors.map((data) => data),
            limit: constructor.limit,
            offset: constructor.offset,
            total: constructor.total,
          };
        })
      ),
    };
  };

  onRaceTableHyperLinkClicked = (value: {
    column: ITableSchema;
    rowIndex: number;
  }) => {
    console.log(value);
  };
}
