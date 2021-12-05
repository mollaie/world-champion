import { default_state } from './default-state.interface';
import { DriverPayload } from './driver.interface';

export interface DriverState extends default_state {
  Driver: DriverPayload;
}
