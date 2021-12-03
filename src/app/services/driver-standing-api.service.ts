import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DriverStandingPayload } from '../interfaces/driver-standing.interface';

const URL = environment.ergast_api;

@Injectable({
  providedIn: 'root',
})
export class DriverStandingApiService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Fetching Drivers Standing related to the specific selected year
   * limit and offset are setting to control the number of data which is retrieving from endpoint
   * @param year
   * @param limit
   * @param offset
   */
  fetch = (
    year: number,
    limit: number,
    offset: number
  ): Observable<DriverStandingPayload> =>
    this.httpClient.get<DriverStandingPayload>(
      `${URL}/${year}/driverStandings.json?limit=${limit}&offset=${offset}`
    );
}
