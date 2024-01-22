import { useMutation, useQueryClient } from 'react-query';

import { axiosInstance } from '../axiosInstance';
import { files, upload, v1 } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

export const useUploadFile = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: { name: string; file: object }) =>
      axiosInstance.post(v1 + files + upload, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.files]);
      },
    },
  );
};
