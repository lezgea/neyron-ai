import { useMutation, useQueryClient } from 'react-query';

import { axiosInstance } from '../axiosInstance';
import { users, v1 } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, data }: { id: string; data: object }) => axiosInstance.put(v1 + users + `/${id}`, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.profile]);
      },
    },
  );
};
