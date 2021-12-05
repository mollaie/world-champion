export interface default_state {
  status: 'pending' | 'loading' | 'success' | 'failed';
  error?: string | null;
}
