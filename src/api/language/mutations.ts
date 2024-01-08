import { useMutation, useQueryClient } from 'react-query';

import { axiosOpen } from '../axiosInstance';
import { users } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

export const useChangeLanguage = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id }: { id: number }) => axiosOpen.patch(users + `/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.languages]);
    },
  });
};
