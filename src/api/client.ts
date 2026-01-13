import { Configuration, NeedListApi } from '@/api/generated';
import { API_BASE } from '@/constants/paymentProcessing';

const configuration = new Configuration({
  basePath: API_BASE,
});

export const needListApi = new NeedListApi(configuration);
