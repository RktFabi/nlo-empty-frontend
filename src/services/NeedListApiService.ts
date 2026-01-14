import { needListApi } from "@/api/client";
import { AllNeedListsDto, NeedListControllerFindAllRequest, NeedListControllerFindOneRequest } from "@/api/generated";

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

// Retrieve one NeedList by ID
export const getOneNeedlist = async (
  params: NeedListControllerFindOneRequest, 
): Promise<AllNeedListsDto | null> => {
  try {
    const response: AllNeedListsDto = await needListApi.needListControllerFindOne(params);
    return response;
  } catch (err) {
    console.error('get-one-needlist failed', err);
    return null;
  }
};