import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'champ-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  lottieOption = {
    path: 'assets/lotties/about.json',
  };
  constructor() {}

  ngOnInit(): void {}
}
