import { useMutation, useQueryClient } from 'react-query';

import { axiosOpen } from '../axiosInstance';
import { forgotPassword, resetPassword, users } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

export const useForgotPassword = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: { email: string }) => axiosOpen.post(users + forgotPassword + `?email=${data?.email}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.forgotPassword]);
      },
    },
  );
};
export const useResetPassword = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ password, confirmPassword, token }: { password: string; confirmPassword: string; token: string }) =>
      axiosOpen.post(users + resetPassword + `?token=${token}`, {
        password,
        confirmPassword,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.resetPassword]);
      },
    },
  );
};
