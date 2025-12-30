import { needListApi } from '@/api/client';
import { AllNeedListsDto } from '@/api/generated';
import { NeedListControllerFindAllRequest } from '@/api/generated/apis/NeedListApi';

export const getNeedlists = async (
  params: NeedListControllerFindAllRequest = {},
): Promise<Array<AllNeedListsDto> | null> => {
  try {
    const response: AllNeedListsDto[] = await needListApi.needListControllerFindAll(params);
    return response;
  } catch (err) {
    console.error('get-needlists failed', err);
    return null;
  }
};
