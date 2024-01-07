import { useQuery } from 'react-query';

import { axiosInstance } from '../axiosInstance';
import { profile, users, v1 } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

export const useGetProfileDetails = ({ token }: { token: boolean }) => {
  console.log(token);
  return useQuery(
    [QUERY_KEYS.profile],
    async () => {
      const { data } = await axiosInstance.get(v1 + users + profile);
      return data;
    },
    {
      enabled: token,
    }
  );
};
