import { needListApi } from '@/api/client';
import { NeedListControllerFindAllRequest } from '@/api/generated';
import { AllNeedListsDto } from '@/api/generated';
import { ResponseError } from '@/api/generated/runtime';

export const getNeedlists = async (
  params: NeedListControllerFindAllRequest = {},
): Promise<Array<AllNeedListsDto> | null> => {
  try {
    const response: AllNeedListsDto[] = await needListApi.needListControllerFindAll(params);
    return response;
  } catch (err) {
    if (err instanceof ResponseError && err.response.status === 404) {
      return [];
    }
    console.error('get-needlists failed', err);
    return null;
  }
};

export const getNeedlist = async (id: string): Promise<AllNeedListsDto | null> => {
  try {
    const response = await needListApi.needListControllerFindOne({ id });
    return response ?? null;
  } catch (err) {
    console.error('get-needlist failed', err);
    return null;
  }
};
