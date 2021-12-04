import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConstructorPayload } from '../interfaces/constructor.interface';

import { ConstructorApiService } from './constructor-api.service';

const limit = environment.page_limit;
const offset = environment.page_offset;

describe('Service : ConstructorApiService', () => {
  let service: ConstructorApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ConstructorApiService(httpClientSpy);
  });

  it('Should return expected values from Constructor API', (done: DoneFn) => {
    const expectedValue: ConstructorPayload = {
      MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        url: 'http://ergast.com/api/f1/2005/constructors.json',
        limit: '30',
        offset: '0',
        total: '10',
        ConstructorTable: {
          season: '2005',
          Constructors: [
            {
              constructorId: 'bar',
              url: 'http://en.wikipedia.org/wiki/British_American_Racing',
              name: 'BAR',
              nationality: 'British',
            },
            {
              constructorId: 'ferrari',
              url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
              name: 'Ferrari',
              nationality: 'Italian',
            },
            {
              constructorId: 'jordan',
              url: 'http://en.wikipedia.org/wiki/Jordan_Grand_Prix',
              name: 'Jordan',
              nationality: 'Irish',
            },
            {
              constructorId: 'mclaren',
              url: 'http://en.wikipedia.org/wiki/McLaren',
              name: 'McLaren',
              nationality: 'British',
            },
            {
              constructorId: 'minardi',
              url: 'http://en.wikipedia.org/wiki/Minardi',
              name: 'Minardi',
              nationality: 'Italian',
            },
            {
              constructorId: 'red_bull',
              url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
              name: 'Red Bull',
              nationality: 'Austrian',
            },
            {
              constructorId: 'renault',
              url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
              name: 'Renault',
              nationality: 'French',
            },
            {
              constructorId: 'sauber',
              url: 'http://en.wikipedia.org/wiki/Sauber',
              name: 'Sauber',
              nationality: 'Swiss',
            },
            {
              constructorId: 'toyota',
              url: 'http://en.wikipedia.org/wiki/Toyota_Racing',
              name: 'Toyota',
              nationality: 'Japanese',
            },
            {
              constructorId: 'williams',
              url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
              name: 'Williams',
              nationality: 'British',
            },
          ],
        },
      },
    };

    //Test best case scenario for expected values
    httpClientSpy.get.and.returnValue(of(expectedValue));

    service
      .fetch(
        parseInt(expectedValue.MRData.ConstructorTable.season),
        limit,
        offset
      )
      .subscribe((response) => {
        expect(response).toEqual(expectedValue, 'Expected value');
        done();
      }, done.fail);

    expect(httpClientSpy.get.calls.count()).toBe(1, 'for one call');
  });
});
