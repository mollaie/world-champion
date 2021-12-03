import { Component, EventEmitter, Output } from '@angular/core';
/**
 * Single component for navigation bar
 * It's included two major parts
 * URL's navigation and year selection
 */
@Component({
  selector: 'champ-navbar',
  template: `
    <nav
      class="header navbar navbar-expand-lg navbar-floating navbar-sticky navbar-dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" [routerLink]="['']">
          <div class="logo">
            <ng-lottie [options]="logo_lottie_option"></ng-lottie>
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" [routerLink]="['']"
                >Dashboard</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/about']">About</a>
            </li>
          </ul>
          <div class="d-flex">
            <champ-season-drop-down
              (Selected_Year)="onSelectSeason($event)"
            ></champ-season-drop-down>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .logo {
        width: 64px;
      }
    `,
  ],
})
export class NavbarComponent {
  @Output() SeasonChanged = new EventEmitter<number>();

  logo_lottie_option = {
    path: 'assets/lotties/logo.json',
  };

  onSelectSeason = (year: number) => this.SeasonChanged.emit(year);
}
