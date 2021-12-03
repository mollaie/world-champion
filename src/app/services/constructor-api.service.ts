import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConstructorPayload } from '../interfaces/constructor.interface';

const URL = environment.ergast_api;

@Injectable({
  providedIn: 'root',
})
export class ConstructorApiService {
  constructor(private httpClient: HttpClient) {}

  fetch = (
    year: number,
    limit: number,
    offset: number
  ): Observable<ConstructorPayload> =>
    this.httpClient.get<ConstructorPayload>(
      `${URL}/${year}/constructors.json?limit=${limit}&offset=${offset}`
    );
}
