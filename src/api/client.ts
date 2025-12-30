import { Configuration, DonationsApi, NeedListApi } from '@/api/generated';
import { API_BASE } from '@/constants/paymentProcessing';

const configuration = new Configuration({
  basePath: API_BASE,
});

export const donationsApi = new DonationsApi(configuration);
export const needListApi: NeedListApi = new NeedListApi(configuration);
