import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DriverPayload } from '../interfaces/driver.interface';

const URL = environment.ergast_api;

@Injectable({
  providedIn: 'root',
})
export class DriverApiService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Fetching Drivers related to the specific selected year
   * limit and offset are setting to control the number of data which is retrieving from endpoint
   * @param year
   * @param limit
   * @param offset
   */
  fetch = (
    year: number,
    limit: number,
    offset: number
  ): Observable<DriverPayload> =>
    this.httpClient.get<DriverPayload>(
      `${URL}/${year}/drivers.json?limit=${limit}&offset=${offset}`
    );
}
