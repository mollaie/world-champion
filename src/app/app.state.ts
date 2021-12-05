import { ConstructorState } from './interfaces/constructor-state.interface';
import { DriverStandingState } from './interfaces/driver-standing-state.interface';
import { DriverState } from './interfaces/driver-state.interface';
import { RaceState } from './interfaces/race-state.interface';

export interface AppState {
  Race: RaceState;
  Driver: DriverState;
  Constructor: ConstructorState;
  DriverStanding: DriverStandingState;
}
