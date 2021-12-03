import { DriverState } from './interfaces/driver-state.interface';
import { RaceState } from './interfaces/race-state.interface';

export interface AppState {
  Race: RaceState;
  Driver: DriverState;
}
