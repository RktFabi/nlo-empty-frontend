import { CANCELLED } from 'dns';

export const ALL_STATUS = {
  PROCESSING: 'processing',
  SUCCESS: 'succeeded',
  FAILURE: 'failed',
  CANCELED: 'canceled', // US spelling to match backend
} as const;
// export type Status = typeof ALL_STATUS[keyof typeof ALL_STATUS];
