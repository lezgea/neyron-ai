import { useMutation, useQueryClient } from 'react-query';

import { axiosOpen } from '../axiosInstance';
import { QUERY_KEYS } from '../query_keys';

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation((data: { email: string; password: string }) => axiosOpen.post('users/login', data), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.login]);
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: { email: string; password: string; languageId: number }) => axiosOpen.post('users/register', data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.register]);
      },
    },
  );
};
