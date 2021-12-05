import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RacePayload } from '../interfaces/race.interface';

const URL = environment.ergast_api;

@Injectable({
  providedIn: 'root',
})
export class RaceApiService {
  constructor(private readonly http: HttpClient) {}

  /**
   * Fetching Races related to the specific selected year
   * limit and offset are setting to control the number of data which is retrieving from endpoint
   * @param year
   * @param limit
   * @param offset
   */
  fetch = (
    year: number,
    limit: number,
    offset: number
  ): Observable<RacePayload> =>
    this.http.get<RacePayload>(
      `${URL}/${year}.json?limit=${limit}&offset=${offset}`
    );
}
