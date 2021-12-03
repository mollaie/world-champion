import { ConstructorPayload } from './constructor.interface';
import { default_state } from './default-state.interface';

export interface ConstructorState extends default_state {
  Constructor: ConstructorPayload;
}
