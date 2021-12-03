import { default_state } from './default-state.interface';
import { RacePayload } from './race.interface';

export interface RaceState extends default_state {
  Race: RacePayload;
}
