/** @format */

import { useQuery } from "react-query";
import { HTTP } from "../../utils";
import queryKeys from "../constant";

const getDetails = async () => {
  try {
    const res = await HTTP.get(`/comment`);
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const useGetDetails = (requestParams = {}) => {
  const fallback = [];
  const { data = fallback, isLoading } = useQuery(
    [
      queryKeys.GET_CONFIGS,
      { page: requestParams?.page, size: requestParams?.size },
    ],
    () => getConfigs(requestParams),
    {
      cacheTime: 0,
    },
  );
  return {
    ConfigResponse: data?.data?.data,
    isLoadingConfig: isLoading,
  };
};
