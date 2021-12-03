import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IDataSet } from 'src/app/interfaces/table-dataset.interface';
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
          <tr *ngFor="let row of data">
            <td *ngFor="let col of DataSet?.schema">{{ row[col.field] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <nav aria-label="Page navigation" *ngIf="DisplayPagination">
      <ul class="pagination justify-content-center">
        <li class="page-item" [ngClass]="{ disabled: offset === 1 }">
          <a class="page-link" (click)="onPreviousPage()">Previous</a>
        </li>

        <li
          class="page-item"
          *ngFor="let page of total_page; let i = index"
          [ngClass]="{ active: i + 1 === current_page }"
        >
          <a class="page-link" (click)="onPageChange(i + 1)">{{ i + 1 }}</a>
        </li>

        <li
          class="page-item"
          [ngClass]="{ disabled: offset === total_page.length }"
        >
          <a class="page-link" (click)="onNextPage()">Next</a>
        </li>
      </ul>
    </nav>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

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

  ///#region Local variables ==>

  data: Array<any> = [];
  total: number = 0;
  offset: number = 1;
  limit: number = environment.page_limit;
  current_page: number = 1;

  ///#endregion Local variables <==

  /**
   * To populate pages indicator we need to calculate total rows divided by limit
   * If number of pages is increased more than 10 pages and in terms of keeping UI consistency
   * It needs to filter out
   *
   * TODO :
   * if number of pages exceed from 10 it must display ... or display more
   * to cover the requirement, needs to implement display more and re-calculate from current page plus 10 pages more
   * and remove previous pages from pagination bar in case of keep UI consistency
   */
  public get total_page(): Array<number> {
    const length =
      this.total / this.offset > 10
        ? 10
        : Math.trunc(Math.round(this.total / this.offset));

    return length > 0 ? Array.from(Array(length).keys()) : [];
  }

  /**
   * This function is taking care about the page changes and emit PageChange event
   * In case of avoiding unnecessary request it needs to control if current page is equal to clicked one
   * @param value
   */
  onPageChange = (value: number) => {
    if (this.current_page !== value) {
      this.current_page = value;
      this.PageChange.emit({ offset: this.current_page, limit: this.limit });
    }
  };

  /**
   * This function is bind to NextPage button and move one step forward
   * To avoid unnecessary request, needs to control if current page is the last page should not fire
   * However it's controlling on template by adding (disabled) class and turn of the button, but in case of double sides control
   * It's good to check here as well
   */
  onNextPage = () => {
    if (this.current_page < this.total_page.length) {
      this.current_page++;
      this.PageChange.emit({ offset: this.current_page, limit: this.limit });
    }
  };

  /**
   * This function is bind to NextPage button and move one step backward
   * To avoid unnecessary request, needs to control if current page is the first page should not fire
   * However it's controlling on template by adding (disabled) class and turn of the button, but in case of double sides control
   * It's good to check here as well
   */
  onPreviousPage = () => {
    if (this.current_page > 1) {
      this.current_page--;
      this.PageChange.emit({ offset: this.current_page, limit: this.limit });
    }
  };
}
