import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * Single component to calculate years range and display in drop down component
 * User might need to search / filter data
 * When user select a year it will emit the selection
 */
@Component({
  selector: 'champ-season-drop-down',
  template: ` <li class="nav-item dropdown d-flex">
    <a
      class="nav-link dropdown-toggle season"
      href="#"
      id="navbarDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      SEASONS
    </a>
    <ul class="dropdown-menu p-3" aria-labelledby="navbarDropdown">
      <li><input class="form-control" [(ngModel)]="filter" /></li>
      <li><hr class="dropdown-divider" /></li>
      <li>
        <a
          class="dropdown-item season-item"
          (click)="onSelectSeason(year)"
          *ngFor="let year of date_range | seasonFilter: filter"
        >
          <p>{{ year }}</p>
          <i class="bi bi-check2-circle" *ngIf="year === selected_year"></i>
        </a>
      </li>
    </ul>
  </li>`,
  styles: [
    `
      .season {
        color: white;
        font-weight: 900;
        text-decoration: underline;
      }
      .season-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      .season-item p {
        padding: 0;
        margin: 0;
        flex: 10;
        order: 0;
      }

      .season-item i {
        flex: 2;
        order: 1;
      }
    `,
  ],
})
export class SeasonDropDownComponent {
  /**
   * Output object to return selected value to parent component
   */
  @Output('Selected_Year') _Selected_Year = new EventEmitter<number>();

  filter: string = '';
  selected_year: number = this.beginning_year;
  /**
   * Send Selected_Year value to parent component via event emitter object
   * @param selected_year : number
   */
  onSelectSeason = (selected_year: number) => {
    this.selected_year = selected_year;
    this._Selected_Year.emit(selected_year);
  };

  /**
   * In order to the application does not required to display all years from beginning, it will filter out from 2005
   * The beginning year is configurable from environment in case that we need different value on different environment
   * Or in case that we need to initial or change the value via pipeline
   */
  public get beginning_year(): number {
    return environment.beginning_year;
  }

  /**
   * In order to current year will be change every year and to avoid adding static value
   * this property is suppose to find the current year using standard Date object
   */
  public get current_year(): number {
    const current_date = new Date(Date.now());
    return current_date.getFullYear();
  }

  /**
   * This property is suppose to calculate a range of years from beginning until current year
   */
  public get date_range(): Array<number> {
    let range: Array<number> = [];
    for (let year = this.beginning_year; year <= this.current_year; year++) {
      range.push(year);
    }
    return range;
  }
}
