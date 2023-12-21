import { useMutation, useQueryClient } from 'react-query';

import { axiosOpen } from '../axiosInstance';
import { QUERY_KEYS } from '../query_keys';

export const useLogin = (): unknown => {
  const queryClient = useQueryClient();
  return useMutation((data) => axiosOpen.post('users/login', data), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.login]);
    },
  });
};
