import { needListApi } from "@/api/client";
import { AllNeedListsDto, NeedListControllerFindAllRequest } from "@/api/generated";

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
