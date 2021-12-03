import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DriverStandingState } from 'src/app/interfaces/driver-standing-state.interface';
import { DriverStandingPayload } from 'src/app/interfaces/driver-standing.interface';
import {
  IDataSet,
  ITableDataContract,
} from 'src/app/interfaces/table-dataset.interface';
import { DRIVER_STANDING_TABLE_SCHEMA } from 'src/app/pages/home/table_schema/DRIVER_STANDING_TABLE_SCHEMA';

@Component({
  selector: 'champ-driver-standing',
  template: ` <champ-table
    [DataSet]="_dataset"
    [DisplayPagination]="false"
    [SpecialField]="'specialCondition'"
  ></champ-table>`,
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriverStandingComponent {
  @Input()
  public set Dataset(v: Observable<DriverStandingState>) {
    this._dataset = {
      ...this._dataset,
      data$: <Observable<ITableDataContract>>v.pipe(
        map((driver: DriverStandingState) => driver.DriverStanding),
        map((driver: DriverStandingPayload) => driver.MRData),
        map((driver) => {
          return <ITableDataContract | unknown>{
            data: driver.StandingsTable?.StandingsLists[0]?.DriverStandings?.map(
              (data) => {
                return {
                  ...data,
                  name: `${data?.Driver?.givenName} ${data?.Driver.familyName}`,
                  nationality: data?.Driver?.nationality,
                  dateOfBirth: data?.Driver?.dateOfBirth,
                  url: data?.Driver?.url,
                  specialCondition:
                    parseInt(data?.position) === 1 ? true : false,
                };
              }
            ).sort((a, b) => {
              return parseInt(a.position) < parseInt(b.position) ? -1 : 1;
            }),
            limit: driver.limit,
            offset: driver.offset,
            total: driver.total,
          };
        })
      ),
    };
  }

  _dataset: IDataSet = {
    schema: DRIVER_STANDING_TABLE_SCHEMA,
  };
}
