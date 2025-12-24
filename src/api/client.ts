import { Configuration, DonationsApi } from '@/api/generated';
import { API_BASE } from '@/constants/paymentProcessing';

const configuration = new Configuration({
  basePath: API_BASE,
});

export const donationsApi = new DonationsApi(configuration);
