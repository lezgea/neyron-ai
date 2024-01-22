import { useQuery } from 'react-query';

import { ISelectedLanguage } from 'src/types';

import { axiosOpen } from '../axiosInstance';
import { ILanguageResponse } from '../blog/blogResponseType';
import { languages } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

export function useGetLanguages() {
  return useQuery<ILanguageResponse<ISelectedLanguage>>([QUERY_KEYS.languages], async () => {
    const { data } = await axiosOpen.get(languages);
    return data;
  });
}
