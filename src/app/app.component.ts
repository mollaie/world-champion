import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SeasonHelperService } from './services/season-helper.service';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('navbar', { static: true })
  NavBarElement!: ElementRef<HTMLElement>;

  title = 'World F1 Champion';

  constructor(private readonly seasonHelper: SeasonHelperService) {}

  ngOnInit(): void {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: true });
      StatusBar.setStyle({ style: Style.Dark });
    }
  }

  onSeasonChanged = (year: number) => this.seasonHelper.onLoad({ year });
}
