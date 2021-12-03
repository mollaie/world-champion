import { default_state } from './default-state.interface';
import { DriverStandingPayload } from './driver-standing.interface';

export interface DriverStandingState extends default_state {
  DriverStanding: DriverStandingPayload;
}
