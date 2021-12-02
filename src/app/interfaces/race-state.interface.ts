import { RacePayload } from './race.interface';

export interface RaceState {
  Race: RacePayload;
  status: 'pending' | 'loading' | 'success' | 'failed';
  error?: string | null;
}
