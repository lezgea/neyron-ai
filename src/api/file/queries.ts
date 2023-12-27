import { useQuery } from 'react-query';
import { ResponseType } from 'axios';

import { axiosInstance } from '../axiosInstance';
import { download, files, v1 } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

export const useGetFile = ({ path, responseType = 'blob' }: { path: string; responseType: ResponseType }) => {
  return useQuery(
    [QUERY_KEYS.files, path],
    async () => {
      const { data } = await axiosInstance.get(v1 + files + download, {
        responseType,
        params: {
          path,
        },
      });
      return data;
    },
    {
      enabled: Boolean(path),
    },
  );
};
