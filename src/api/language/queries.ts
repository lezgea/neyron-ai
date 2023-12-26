import { useQuery } from 'react-query';

import { IDataTypeLanguage } from 'src/types';

import { axiosOpen } from '../axiosInstance';
import { IBackendResponse } from '../blog/blogResponseType';
import { languages } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

export function useGetLanguages() {
  return useQuery<IBackendResponse<IDataTypeLanguage>>([QUERY_KEYS.languages], async () => {
    const { data } = await axiosOpen.get(languages);
    return data;
  });
}
