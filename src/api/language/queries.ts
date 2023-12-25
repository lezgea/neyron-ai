import { useQuery } from 'react-query';

import { DataTypeLanguage } from 'src/types';

import { axiosOpen } from '../axiosInstance';
import { BackendResponse } from '../blog/blogResponseType';
import { languages } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

export function useGetLanguages() {
  return useQuery<BackendResponse<DataTypeLanguage>>([QUERY_KEYS.languages], async () => {
    const { data } = await axiosOpen.get(languages);
    return data;
  });
}
