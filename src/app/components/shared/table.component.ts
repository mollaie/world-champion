import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IDataSet,
  ITableDataContract,
} from 'src/app/interfaces/table-dataset.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'champ-table',
  template: ` <div class="table-responsive">
    <table class="table align-middle">
          <thead>
            <tr>

              <th scope="col" *ngFor="let col of DataSet?.schema">{{col?.title}}</th>

            </tr>
          <thead>

          <tbody>

              <tr *ngFor="let row of data">
                  <td *ngFor="let col of DataSet?.schema">{{row[col]}}</td>
              </tr>

          </tbody>
    </table>

    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item" [ngClass]="{'disabled': offset === 1}">
          <a class="page-link" (click)="onPreviousPage()">Previous</a>
        </li>
        <li class="page-item" *ngFor="let page of total_page;let i = index" [ngClass]="{'active': (i  + 1) === current_page}"><a class="page-link" (click)="onPageChange(i + 1)">{{i  + 1}}</a></li>
        <li class="page-item" [ngClass]="{'disabled': offset === total_page}">
          <a class="page-link" (click)="onNextPage()">Next</a>
        </li>
      </ul>
    </nav>

  </div> `,
  styles: [``],
})
export class TableComponent {
  @Input()
  public set DataSet(v: IDataSet) {
    v.data$.subscribe((d) => {
      this.data = d.data;
      this.total = d.total;
      this.offset = d.offset;
      this.limit = d.limit;
    });
  }

  @Output() PageChange = new EventEmitter<{ offset: number; limit: number }>();

  data: Array<unknown> = [];
  total: number = 0;
  offset: number = 1;
  limit: number = environment.page_limit;
  current_page: number = 1;

  public get total_page(): number {
    return this.total / this.offset > 10
      ? 10
      : Math.trunc(Math.round(this.total / this.offset));
  }

  onPageChange = (value: number) => {
    if (this.current_page !== value) {
      this.current_page = value;
      this.PageChange.emit({ offset: this.current_page, limit: this.limit });
    }
  };

  onNextPage = () => {
    if (this.current_page < this.total_page) {
      this.current_page++;
      this.PageChange.emit({ offset: this.current_page, limit: this.limit });
    }
  };

  onPreviousPage = () => {
    if (this.current_page > 1) {
      this.current_page--;
      this.PageChange.emit({ offset: this.current_page, limit: this.limit });
    }
  };
}
