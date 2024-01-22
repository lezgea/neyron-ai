import { useQuery } from 'react-query';

import { axiosInstance } from '../axiosInstance';
import { countries, v1 } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

export const useGetCountries = () => {
  return useQuery([QUERY_KEYS.countries], async () => {
    const { data } = await axiosInstance.get(v1 + countries);
    return data;
  });
};
