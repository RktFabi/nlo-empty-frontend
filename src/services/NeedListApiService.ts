import { needListApi } from '@/api/client';
import { AllNeedListsDto, NeedListControllerFindAllRequest } from '@/api/generated';

// Fetches all need lists from the backend API
export const getNeedlists = async (
  params: NeedListControllerFindAllRequest = {}, // Optional filter/pagination params
): Promise<Array<AllNeedListsDto> | null> => {
  try {
    // Call the auto-generated API method to fetch data
    const response: AllNeedListsDto[] = await needListApi.needListControllerFindAll(params);
    return response;
  } catch (err) {
    // Return null on failure instead of crashing the app
    console.error('get-needlists failed', err);
    return null;
  }
};
