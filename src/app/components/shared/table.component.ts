import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  IDataSet,
  ITableSchema,
} from 'src/app/interfaces/table-dataset.interface';
import { environment } from 'src/environments/environment';

/**
 * Single multiple proposes Table component
 * With pagination and dynamic populate / render its layout with schema which is retrieving as an input parameter
 * And map data with relative column
 * In case of biding data into correct column it's require to have matched field between schema and data
 *
 * TODO :
 * In order to there is possibility to retrieve schema which is not following our expected ordering
 * It's good to have ordering (refer to order property in ITableSchema) before rendering in template
 */
@Component({
  selector: 'champ-table',
  template: `
    <div class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col" *ngFor="let col of DataSet?.schema">
              {{ col?.title }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr *ngFor="let row of data; let i = index">
            <td
              *ngFor="let col of DataSet?.schema"
              [ngClass]="{ special: row[SpecialField] }"
            >
              <div [ngSwitch]="col.type">
                <div *ngSwitchCase="'String'">
                  <ng-container
                    *ngTemplateOutlet="
                      StringColumn;
                      context: { $implicit: row[col.field] }
                    "
                  ></ng-container>
                </div>
                <div *ngSwitchCase="'HyperLink'">
                  <ng-container
                    *ngTemplateOutlet="
                      HyperLinkColumn;
                      context: {
                        $implicit: {
                          value: row[col.field],
                          rowIndex: i,
                          column: col
                        }
                      }
                    "
                  ></ng-container>
                </div>
                <div *ngSwitchCase="'AutoNumber'">
                  <ng-container
                    *ngTemplateOutlet="
                      AutoNumberColumn;
                      context: { $implicit: i }
                    "
                  ></ng-container>
                </div>
                <div *ngSwitchCase="'Date'">
                  <ng-container
                    *ngTemplateOutlet="
                      DateColumn;
                      context: { $implicit: row[col.field] }
                    "
                  ></ng-container>
                </div>
                <div *ngSwitchCase="'Time'">
                  <ng-container
                    *ngTemplateOutlet="
                      TimeColumn;
                      context: { $implicit: row[col.field] }
                    "
                  ></ng-container>
                </div>
                <div *ngSwitchCase="'Number'">
                  <ng-container
                    *ngTemplateOutlet="
                      NumberColumn;
                      context: { $implicit: row[col.field] }
                    "
                  ></ng-container>
                </div>
                <div *ngSwitchDefault>
                  <ng-container
                    *ngTemplateOutlet="
                      StringColumn;
                      context: { $implicit: row[col.field] }
                    "
                  ></ng-container>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <ng-template #StringColumn let-value>
      {{ value }}
    </ng-template>

    <ng-template #DateColumn let-value>{{
      value | date: 'yyyy MMM dd'
    }}</ng-template>

    <ng-template #TimeColumn let-value>{{ value | date: 'h:mm' }}</ng-template>

    <ng-template #HyperLinkColumn let-value
      ><a (click)="onHyperLinkClicked(value)" class="hyperLink">{{
        value.value
      }}</a></ng-template
    >

    <ng-template #AutoNumberColumn let-value>{{ value + 1 }}</ng-template>
    <ng-template #NumberColumn let-value
      ><b>{{ value }}</b></ng-template
    >
  `,
  styles: [
    `
      .hyperLink {
        text-decoration: underline;
        color: var(--bs-blue);
      }

      .special {
        background-color: var(--bs-cyan);
        color: #ffffff;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
  @Input() SpecialField: string = '';
  @Input() DisplayPagination: boolean = true;
  /**
   * The Dataset is an input which is the result of REST API call
   * It is retrieving as an Observable object
   * In order to avoid multiple subscription on template ( due to having separate scopes of data into one Observable object and using on different block )
   * It is required to subscribe in advanced and hand over to local variables */
  /** */
  private _dataset!: IDataSet;
  @Input()
  public set DataSet(v: IDataSet) {
    this._dataset = v;
    v.data$?.subscribe((d) => {
      this.data = d.data;
      this.total = d.total;
      this.offset = d.offset * d.limit;
      this.limit = d.limit;

      //In case of forcing angular change detector to detect changes and re-render partial DOM it needs to call detect changes on change detector reference
      this.changeDetectorRef.detectChanges();
    });
  }

  public get DataSet(): IDataSet {
    return this._dataset;
  }

  /**
   * To control pagination changes we need to handle local states and hand over changes to the parent component
   * Require changes are offset and limit
   * In our case limit is not implemented and using default values which is placed into environment config file
   */
  @Output() PageChange = new EventEmitter<{ offset: number; limit: number }>();

  /**
   * In case of handling hyper link click action, table needs to capture the column and related row which user click on it and hand over event to parent component
   */
  @Output() HyperLinkClicked = new EventEmitter<{
    column: ITableSchema;
    rowIndex: number;
  }>();
  ///#region Local variables ==>

  data: Array<any> = [];
  total: number = 0;
  offset: number = 1;
  limit: number = environment.page_limit;
  current_page: number = 1;

  ///#endregion Local variables <==

  /**
   * This function is binding to Hyperlink columns and fire related event in case of handing over values to the parent component
   * @param value
   * @returns
   */
  onHyperLinkClicked = (value: {
    value: string;
    rowIndex: number;
    column: ITableSchema;
  }) => this.HyperLinkClicked.emit({ ...value });
}
