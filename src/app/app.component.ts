import { Component } from '@angular/core';
import { SeasonHelperService } from './services/season-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'World F1 Champion';

  constructor(private readonly seasonHelper: SeasonHelperService) {}

  onSeasonChanged = (year: number) => this.seasonHelper.onLoad({ year });
}
