import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DriverPayload } from '../interfaces/driver.interface';

import { DriverApiService } from './driver-api.service';

const limit = environment.page_limit;
const offset = environment.page_offset;

describe('Service : DriverApiService', () => {
  let service: DriverApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DriverApiService(httpClientSpy);
  });

  it('Should return expected values from Constructor API', (done: DoneFn) => {
    const expectedValue: DriverPayload = {
      MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        url: 'http://ergast.com/api/f1/2005/drivers.json',
        limit: '30',
        offset: '0',
        total: '27',
        DriverTable: {
          season: '2005',
          Drivers: [
            {
              driverId: 'albers',
              code: 'ALB',
              url: 'http://en.wikipedia.org/wiki/Christijan_Albers',
              givenName: 'Christijan',
              familyName: 'Albers',
              dateOfBirth: '1979-04-16',
              nationality: 'Dutch',
            },
            {
              driverId: 'alonso',
              permanentNumber: '14',
              code: 'ALO',
              url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
              givenName: 'Fernando',
              familyName: 'Alonso',
              dateOfBirth: '1981-07-29',
              nationality: 'Spanish',
            },
            {
              driverId: 'barrichello',
              code: 'BAR',
              url: 'http://en.wikipedia.org/wiki/Rubens_Barrichello',
              givenName: 'Rubens',
              familyName: 'Barrichello',
              dateOfBirth: '1972-05-23',
              nationality: 'Brazilian',
            },
            {
              driverId: 'button',
              permanentNumber: '22',
              code: 'BUT',
              url: 'http://en.wikipedia.org/wiki/Jenson_Button',
              givenName: 'Jenson',
              familyName: 'Button',
              dateOfBirth: '1980-01-19',
              nationality: 'British',
            },
            {
              driverId: 'coulthard',
              code: 'COU',
              url: 'http://en.wikipedia.org/wiki/David_Coulthard',
              givenName: 'David',
              familyName: 'Coulthard',
              dateOfBirth: '1971-03-27',
              nationality: 'British',
            },
            {
              driverId: 'davidson',
              code: 'DAV',
              url: 'http://en.wikipedia.org/wiki/Anthony_Davidson',
              givenName: 'Anthony',
              familyName: 'Davidson',
              dateOfBirth: '1979-04-18',
              nationality: 'British',
            },
            {
              driverId: 'rosa',
              code: 'DLR',
              url: 'http://en.wikipedia.org/wiki/Pedro_de_la_Rosa',
              givenName: 'Pedro',
              familyName: 'de la Rosa',
              dateOfBirth: '1971-02-24',
              nationality: 'Spanish',
            },
            {
              driverId: 'doornbos',
              code: 'DOO',
              url: 'http://en.wikipedia.org/wiki/Robert_Doornbos',
              givenName: 'Robert',
              familyName: 'Doornbos',
              dateOfBirth: '1981-09-23',
              nationality: 'Dutch',
            },
            {
              driverId: 'fisichella',
              code: 'FIS',
              url: 'http://en.wikipedia.org/wiki/Giancarlo_Fisichella',
              givenName: 'Giancarlo',
              familyName: 'Fisichella',
              dateOfBirth: '1973-01-14',
              nationality: 'Italian',
            },
            {
              driverId: 'friesacher',
              code: 'FRI',
              url: 'http://en.wikipedia.org/wiki/Patrick_Friesacher',
              givenName: 'Patrick',
              familyName: 'Friesacher',
              dateOfBirth: '1980-09-26',
              nationality: 'Austrian',
            },
            {
              driverId: 'heidfeld',
              code: 'HEI',
              url: 'http://en.wikipedia.org/wiki/Nick_Heidfeld',
              givenName: 'Nick',
              familyName: 'Heidfeld',
              dateOfBirth: '1977-05-10',
              nationality: 'German',
            },
            {
              driverId: 'karthikeyan',
              code: 'KAR',
              url: 'http://en.wikipedia.org/wiki/Narain_Karthikeyan',
              givenName: 'Narain',
              familyName: 'Karthikeyan',
              dateOfBirth: '1977-01-14',
              nationality: 'Indian',
            },
            {
              driverId: 'klien',
              code: 'KLI',
              url: 'http://en.wikipedia.org/wiki/Christian_Klien',
              givenName: 'Christian',
              familyName: 'Klien',
              dateOfBirth: '1983-02-07',
              nationality: 'Austrian',
            },
            {
              driverId: 'liuzzi',
              code: 'LIU',
              url: 'http://en.wikipedia.org/wiki/Vitantonio_Liuzzi',
              givenName: 'Vitantonio',
              familyName: 'Liuzzi',
              dateOfBirth: '1980-08-06',
              nationality: 'Italian',
            },
            {
              driverId: 'massa',
              permanentNumber: '19',
              code: 'MAS',
              url: 'http://en.wikipedia.org/wiki/Felipe_Massa',
              givenName: 'Felipe',
              familyName: 'Massa',
              dateOfBirth: '1981-04-25',
              nationality: 'Brazilian',
            },
            {
              driverId: 'monteiro',
              code: 'TMO',
              url: 'http://en.wikipedia.org/wiki/Tiago_Monteiro',
              givenName: 'Tiago',
              familyName: 'Monteiro',
              dateOfBirth: '1976-07-24',
              nationality: 'Portuguese',
            },
            {
              driverId: 'montoya',
              code: 'MON',
              url: 'http://en.wikipedia.org/wiki/Juan_Pablo_Montoya',
              givenName: 'Juan',
              familyName: 'Pablo Montoya',
              dateOfBirth: '1975-09-20',
              nationality: 'Colombian',
            },
            {
              driverId: 'pizzonia',
              code: 'PIZ',
              url: 'http://en.wikipedia.org/wiki/Ant%C3%B4nio_Pizzonia',
              givenName: 'Antônio',
              familyName: 'Pizzonia',
              dateOfBirth: '1980-09-11',
              nationality: 'Brazilian',
            },
            {
              driverId: 'raikkonen',
              permanentNumber: '7',
              code: 'RAI',
              url: 'http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen',
              givenName: 'Kimi',
              familyName: 'Räikkönen',
              dateOfBirth: '1979-10-17',
              nationality: 'Finnish',
            },
            {
              driverId: 'sato',
              code: 'SAT',
              url: 'http://en.wikipedia.org/wiki/Takuma_Sato',
              givenName: 'Takuma',
              familyName: 'Sato',
              dateOfBirth: '1977-01-28',
              nationality: 'Japanese',
            },
            {
              driverId: 'ralf_schumacher',
              code: 'SCH',
              url: 'http://en.wikipedia.org/wiki/Ralf_Schumacher',
              givenName: 'Ralf',
              familyName: 'Schumacher',
              dateOfBirth: '1975-06-30',
              nationality: 'German',
            },
            {
              driverId: 'michael_schumacher',
              code: 'MSC',
              url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
              givenName: 'Michael',
              familyName: 'Schumacher',
              dateOfBirth: '1969-01-03',
              nationality: 'German',
            },
            {
              driverId: 'trulli',
              code: 'TRU',
              url: 'http://en.wikipedia.org/wiki/Jarno_Trulli',
              givenName: 'Jarno',
              familyName: 'Trulli',
              dateOfBirth: '1974-07-13',
              nationality: 'Italian',
            },
            {
              driverId: 'villeneuve',
              code: 'VIL',
              url: 'http://en.wikipedia.org/wiki/Jacques_Villeneuve',
              givenName: 'Jacques',
              familyName: 'Villeneuve',
              dateOfBirth: '1971-04-09',
              nationality: 'Canadian',
            },
            {
              driverId: 'webber',
              code: 'WEB',
              url: 'http://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)',
              givenName: 'Mark',
              familyName: 'Webber',
              dateOfBirth: '1976-08-27',
              nationality: 'Australian',
            },
            {
              driverId: 'wurz',
              code: 'WUR',
              url: 'http://en.wikipedia.org/wiki/Alexander_Wurz',
              givenName: 'Alexander',
              familyName: 'Wurz',
              dateOfBirth: '1974-02-15',
              nationality: 'Austrian',
            },
            {
              driverId: 'zonta',
              code: 'ZON',
              url: 'http://en.wikipedia.org/wiki/Ricardo_Zonta',
              givenName: 'Ricardo',
              familyName: 'Zonta',
              dateOfBirth: '1976-03-23',
              nationality: 'Brazilian',
            },
          ],
        },
      },
    };

    //Test best case scenario for expected values
    httpClientSpy.get.and.returnValue(of(expectedValue));

    service
      .fetch(parseInt(expectedValue.MRData.DriverTable.season), limit, offset)
      .subscribe((response) => {
        expect(response).toEqual(expectedValue, 'Expected value');
        done();
      }, done.fail);

    expect(httpClientSpy.get.calls.count()).toBe(1, 'for one call');
  });
});
