import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DriverStandingPayload } from '../interfaces/driver-standing.interface';

import { DriverStandingApiService } from './driver-standing-api.service';

const limit = environment.page_limit;
const offset = environment.page_offset;

describe('Service : DriverStandingApiService', () => {
  let service: DriverStandingApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DriverStandingApiService(httpClientSpy);
  });

  it('Should return expected values from Constructor API', (done: DoneFn) => {
    const expectedValue: DriverStandingPayload = {
      MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        url: 'http://ergast.com/api/f1/2005/driverstandings.json',
        limit: '100',
        offset: '0',
        total: '25',
        StandingsTable: {
          season: '2005',
          StandingsLists: [
            {
              season: '2005',
              round: '19',
              DriverStandings: [
                {
                  position: '1',
                  positionText: '1',
                  points: '133',
                  wins: '7',
                  Driver: {
                    driverId: 'alonso',
                    permanentNumber: '14',
                    code: 'ALO',
                    url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                    givenName: 'Fernando',
                    familyName: 'Alonso',
                    dateOfBirth: '1981-07-29',
                    nationality: 'Spanish',
                  },
                  Constructors: [
                    {
                      constructorId: 'renault',
                      url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                      name: 'Renault',
                      nationality: 'French',
                    },
                  ],
                },
                {
                  position: '2',
                  positionText: '2',
                  points: '112',
                  wins: '7',
                  Driver: {
                    driverId: 'raikkonen',
                    permanentNumber: '7',
                    code: 'RAI',
                    url: 'http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen',
                    givenName: 'Kimi',
                    familyName: 'Räikkönen',
                    dateOfBirth: '1979-10-17',
                    nationality: 'Finnish',
                  },
                  Constructors: [
                    {
                      constructorId: 'mclaren',
                      url: 'http://en.wikipedia.org/wiki/McLaren',
                      name: 'McLaren',
                      nationality: 'British',
                    },
                  ],
                },
                {
                  position: '3',
                  positionText: '3',
                  points: '62',
                  wins: '1',
                  Driver: {
                    driverId: 'michael_schumacher',
                    code: 'MSC',
                    url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                    givenName: 'Michael',
                    familyName: 'Schumacher',
                    dateOfBirth: '1969-01-03',
                    nationality: 'German',
                  },
                  Constructors: [
                    {
                      constructorId: 'ferrari',
                      url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                      name: 'Ferrari',
                      nationality: 'Italian',
                    },
                  ],
                },
                {
                  position: '4',
                  positionText: '4',
                  points: '60',
                  wins: '3',
                  Driver: {
                    driverId: 'montoya',
                    code: 'MON',
                    url: 'http://en.wikipedia.org/wiki/Juan_Pablo_Montoya',
                    givenName: 'Juan',
                    familyName: 'Pablo Montoya',
                    dateOfBirth: '1975-09-20',
                    nationality: 'Colombian',
                  },
                  Constructors: [
                    {
                      constructorId: 'mclaren',
                      url: 'http://en.wikipedia.org/wiki/McLaren',
                      name: 'McLaren',
                      nationality: 'British',
                    },
                  ],
                },
                {
                  position: '5',
                  positionText: '5',
                  points: '58',
                  wins: '1',
                  Driver: {
                    driverId: 'fisichella',
                    code: 'FIS',
                    url: 'http://en.wikipedia.org/wiki/Giancarlo_Fisichella',
                    givenName: 'Giancarlo',
                    familyName: 'Fisichella',
                    dateOfBirth: '1973-01-14',
                    nationality: 'Italian',
                  },
                  Constructors: [
                    {
                      constructorId: 'renault',
                      url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                      name: 'Renault',
                      nationality: 'French',
                    },
                  ],
                },
                {
                  position: '6',
                  positionText: '6',
                  points: '45',
                  wins: '0',
                  Driver: {
                    driverId: 'ralf_schumacher',
                    code: 'SCH',
                    url: 'http://en.wikipedia.org/wiki/Ralf_Schumacher',
                    givenName: 'Ralf',
                    familyName: 'Schumacher',
                    dateOfBirth: '1975-06-30',
                    nationality: 'German',
                  },
                  Constructors: [
                    {
                      constructorId: 'toyota',
                      url: 'http://en.wikipedia.org/wiki/Toyota_Racing',
                      name: 'Toyota',
                      nationality: 'Japanese',
                    },
                  ],
                },
                {
                  position: '7',
                  positionText: '7',
                  points: '43',
                  wins: '0',
                  Driver: {
                    driverId: 'trulli',
                    code: 'TRU',
                    url: 'http://en.wikipedia.org/wiki/Jarno_Trulli',
                    givenName: 'Jarno',
                    familyName: 'Trulli',
                    dateOfBirth: '1974-07-13',
                    nationality: 'Italian',
                  },
                  Constructors: [
                    {
                      constructorId: 'toyota',
                      url: 'http://en.wikipedia.org/wiki/Toyota_Racing',
                      name: 'Toyota',
                      nationality: 'Japanese',
                    },
                  ],
                },
                {
                  position: '8',
                  positionText: '8',
                  points: '38',
                  wins: '0',
                  Driver: {
                    driverId: 'barrichello',
                    code: 'BAR',
                    url: 'http://en.wikipedia.org/wiki/Rubens_Barrichello',
                    givenName: 'Rubens',
                    familyName: 'Barrichello',
                    dateOfBirth: '1972-05-23',
                    nationality: 'Brazilian',
                  },
                  Constructors: [
                    {
                      constructorId: 'ferrari',
                      url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                      name: 'Ferrari',
                      nationality: 'Italian',
                    },
                  ],
                },
                {
                  position: '9',
                  positionText: '9',
                  points: '37',
                  wins: '0',
                  Driver: {
                    driverId: 'button',
                    permanentNumber: '22',
                    code: 'BUT',
                    url: 'http://en.wikipedia.org/wiki/Jenson_Button',
                    givenName: 'Jenson',
                    familyName: 'Button',
                    dateOfBirth: '1980-01-19',
                    nationality: 'British',
                  },
                  Constructors: [
                    {
                      constructorId: 'bar',
                      url: 'http://en.wikipedia.org/wiki/British_American_Racing',
                      name: 'BAR',
                      nationality: 'British',
                    },
                  ],
                },
                {
                  position: '10',
                  positionText: '10',
                  points: '36',
                  wins: '0',
                  Driver: {
                    driverId: 'webber',
                    code: 'WEB',
                    url: 'http://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)',
                    givenName: 'Mark',
                    familyName: 'Webber',
                    dateOfBirth: '1976-08-27',
                    nationality: 'Australian',
                  },
                  Constructors: [
                    {
                      constructorId: 'williams',
                      url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                      name: 'Williams',
                      nationality: 'British',
                    },
                  ],
                },
                {
                  position: '11',
                  positionText: '11',
                  points: '28',
                  wins: '0',
                  Driver: {
                    driverId: 'heidfeld',
                    code: 'HEI',
                    url: 'http://en.wikipedia.org/wiki/Nick_Heidfeld',
                    givenName: 'Nick',
                    familyName: 'Heidfeld',
                    dateOfBirth: '1977-05-10',
                    nationality: 'German',
                  },
                  Constructors: [
                    {
                      constructorId: 'williams',
                      url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                      name: 'Williams',
                      nationality: 'British',
                    },
                  ],
                },
                {
                  position: '12',
                  positionText: '12',
                  points: '24',
                  wins: '0',
                  Driver: {
                    driverId: 'coulthard',
                    code: 'COU',
                    url: 'http://en.wikipedia.org/wiki/David_Coulthard',
                    givenName: 'David',
                    familyName: 'Coulthard',
                    dateOfBirth: '1971-03-27',
                    nationality: 'British',
                  },
                  Constructors: [
                    {
                      constructorId: 'red_bull',
                      url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                      name: 'Red Bull',
                      nationality: 'Austrian',
                    },
                  ],
                },
                {
                  position: '13',
                  positionText: '13',
                  points: '11',
                  wins: '0',
                  Driver: {
                    driverId: 'massa',
                    permanentNumber: '19',
                    code: 'MAS',
                    url: 'http://en.wikipedia.org/wiki/Felipe_Massa',
                    givenName: 'Felipe',
                    familyName: 'Massa',
                    dateOfBirth: '1981-04-25',
                    nationality: 'Brazilian',
                  },
                  Constructors: [
                    {
                      constructorId: 'sauber',
                      url: 'http://en.wikipedia.org/wiki/Sauber',
                      name: 'Sauber',
                      nationality: 'Swiss',
                    },
                  ],
                },
                {
                  position: '14',
                  positionText: '14',
                  points: '9',
                  wins: '0',
                  Driver: {
                    driverId: 'villeneuve',
                    code: 'VIL',
                    url: 'http://en.wikipedia.org/wiki/Jacques_Villeneuve',
                    givenName: 'Jacques',
                    familyName: 'Villeneuve',
                    dateOfBirth: '1971-04-09',
                    nationality: 'Canadian',
                  },
                  Constructors: [
                    {
                      constructorId: 'sauber',
                      url: 'http://en.wikipedia.org/wiki/Sauber',
                      name: 'Sauber',
                      nationality: 'Swiss',
                    },
                  ],
                },
                {
                  position: '15',
                  positionText: '15',
                  points: '9',
                  wins: '0',
                  Driver: {
                    driverId: 'klien',
                    code: 'KLI',
                    url: 'http://en.wikipedia.org/wiki/Christian_Klien',
                    givenName: 'Christian',
                    familyName: 'Klien',
                    dateOfBirth: '1983-02-07',
                    nationality: 'Austrian',
                  },
                  Constructors: [
                    {
                      constructorId: 'red_bull',
                      url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                      name: 'Red Bull',
                      nationality: 'Austrian',
                    },
                  ],
                },
                {
                  position: '16',
                  positionText: '16',
                  points: '7',
                  wins: '0',
                  Driver: {
                    driverId: 'monteiro',
                    code: 'TMO',
                    url: 'http://en.wikipedia.org/wiki/Tiago_Monteiro',
                    givenName: 'Tiago',
                    familyName: 'Monteiro',
                    dateOfBirth: '1976-07-24',
                    nationality: 'Portuguese',
                  },
                  Constructors: [
                    {
                      constructorId: 'jordan',
                      url: 'http://en.wikipedia.org/wiki/Jordan_Grand_Prix',
                      name: 'Jordan',
                      nationality: 'Irish',
                    },
                  ],
                },
                {
                  position: '17',
                  positionText: '17',
                  points: '6',
                  wins: '0',
                  Driver: {
                    driverId: 'wurz',
                    code: 'WUR',
                    url: 'http://en.wikipedia.org/wiki/Alexander_Wurz',
                    givenName: 'Alexander',
                    familyName: 'Wurz',
                    dateOfBirth: '1974-02-15',
                    nationality: 'Austrian',
                  },
                  Constructors: [
                    {
                      constructorId: 'mclaren',
                      url: 'http://en.wikipedia.org/wiki/McLaren',
                      name: 'McLaren',
                      nationality: 'British',
                    },
                  ],
                },
                {
                  position: '18',
                  positionText: '18',
                  points: '5',
                  wins: '0',
                  Driver: {
                    driverId: 'karthikeyan',
                    code: 'KAR',
                    url: 'http://en.wikipedia.org/wiki/Narain_Karthikeyan',
                    givenName: 'Narain',
                    familyName: 'Karthikeyan',
                    dateOfBirth: '1977-01-14',
                    nationality: 'Indian',
                  },
                  Constructors: [
                    {
                      constructorId: 'jordan',
                      url: 'http://en.wikipedia.org/wiki/Jordan_Grand_Prix',
                      name: 'Jordan',
                      nationality: 'Irish',
                    },
                  ],
                },
                {
                  position: '19',
                  positionText: '19',
                  points: '4',
                  wins: '0',
                  Driver: {
                    driverId: 'albers',
                    code: 'ALB',
                    url: 'http://en.wikipedia.org/wiki/Christijan_Albers',
                    givenName: 'Christijan',
                    familyName: 'Albers',
                    dateOfBirth: '1979-04-16',
                    nationality: 'Dutch',
                  },
                  Constructors: [
                    {
                      constructorId: 'minardi',
                      url: 'http://en.wikipedia.org/wiki/Minardi',
                      name: 'Minardi',
                      nationality: 'Italian',
                    },
                  ],
                },
                {
                  position: '20',
                  positionText: '20',
                  points: '4',
                  wins: '0',
                  Driver: {
                    driverId: 'rosa',
                    code: 'DLR',
                    url: 'http://en.wikipedia.org/wiki/Pedro_de_la_Rosa',
                    givenName: 'Pedro',
                    familyName: 'de la Rosa',
                    dateOfBirth: '1971-02-24',
                    nationality: 'Spanish',
                  },
                  Constructors: [
                    {
                      constructorId: 'mclaren',
                      url: 'http://en.wikipedia.org/wiki/McLaren',
                      name: 'McLaren',
                      nationality: 'British',
                    },
                  ],
                },
                {
                  position: '21',
                  positionText: '21',
                  points: '3',
                  wins: '0',
                  Driver: {
                    driverId: 'friesacher',
                    code: 'FRI',
                    url: 'http://en.wikipedia.org/wiki/Patrick_Friesacher',
                    givenName: 'Patrick',
                    familyName: 'Friesacher',
                    dateOfBirth: '1980-09-26',
                    nationality: 'Austrian',
                  },
                  Constructors: [
                    {
                      constructorId: 'minardi',
                      url: 'http://en.wikipedia.org/wiki/Minardi',
                      name: 'Minardi',
                      nationality: 'Italian',
                    },
                  ],
                },
                {
                  position: '22',
                  positionText: '22',
                  points: '2',
                  wins: '0',
                  Driver: {
                    driverId: 'pizzonia',
                    code: 'PIZ',
                    url: 'http://en.wikipedia.org/wiki/Ant%C3%B4nio_Pizzonia',
                    givenName: 'Antônio',
                    familyName: 'Pizzonia',
                    dateOfBirth: '1980-09-11',
                    nationality: 'Brazilian',
                  },
                  Constructors: [
                    {
                      constructorId: 'williams',
                      url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                      name: 'Williams',
                      nationality: 'British',
                    },
                  ],
                },
                {
                  position: '23',
                  positionText: '23',
                  points: '1',
                  wins: '0',
                  Driver: {
                    driverId: 'sato',
                    code: 'SAT',
                    url: 'http://en.wikipedia.org/wiki/Takuma_Sato',
                    givenName: 'Takuma',
                    familyName: 'Sato',
                    dateOfBirth: '1977-01-28',
                    nationality: 'Japanese',
                  },
                  Constructors: [
                    {
                      constructorId: 'bar',
                      url: 'http://en.wikipedia.org/wiki/British_American_Racing',
                      name: 'BAR',
                      nationality: 'British',
                    },
                  ],
                },
                {
                  position: '24',
                  positionText: '24',
                  points: '1',
                  wins: '0',
                  Driver: {
                    driverId: 'liuzzi',
                    code: 'LIU',
                    url: 'http://en.wikipedia.org/wiki/Vitantonio_Liuzzi',
                    givenName: 'Vitantonio',
                    familyName: 'Liuzzi',
                    dateOfBirth: '1980-08-06',
                    nationality: 'Italian',
                  },
                  Constructors: [
                    {
                      constructorId: 'red_bull',
                      url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                      name: 'Red Bull',
                      nationality: 'Austrian',
                    },
                  ],
                },
                {
                  position: '25',
                  positionText: '25',
                  points: '0',
                  wins: '0',
                  Driver: {
                    driverId: 'doornbos',
                    code: 'DOO',
                    url: 'http://en.wikipedia.org/wiki/Robert_Doornbos',
                    givenName: 'Robert',
                    familyName: 'Doornbos',
                    dateOfBirth: '1981-09-23',
                    nationality: 'Dutch',
                  },
                  Constructors: [
                    {
                      constructorId: 'minardi',
                      url: 'http://en.wikipedia.org/wiki/Minardi',
                      name: 'Minardi',
                      nationality: 'Italian',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    };

    //Test best case scenario for expected values
    httpClientSpy.get.and.returnValue(of(expectedValue));

    service
      .fetch(
        parseInt(expectedValue.MRData.StandingsTable.season),
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
