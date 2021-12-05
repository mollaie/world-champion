import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'champ-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  lottieOption = {
    path: 'assets/lotties/page-not-found.json',
  };
  constructor() {}

  ngOnInit(): void {}
}
