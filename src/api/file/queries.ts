import { useQuery } from 'react-query';

import { axiosInstance } from '../axiosInstance';
import { download, files, v1 } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

export const useGetFile = ({ path }: { path: string }) => {
  return useQuery(
    [QUERY_KEYS.files, path],
    async () => {
      const { data } = await axiosInstance.get(v1 + files + download, {
        responseType: 'blob',
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
