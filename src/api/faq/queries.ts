import { useQuery } from 'react-query';

import { axiosInstance } from '../axiosInstance';
import { faqs, languages, v1 } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

export const useGetFaq = ({ isOnMainPage, languageId }: { isOnMainPage: boolean; languageId: number }) => {
  return useQuery([QUERY_KEYS.faq, isOnMainPage, languageId], async () => {
    const { data } = await axiosInstance.get(v1 + faqs + languages + `/${languageId}`, {
      params: {
        isOnMainPage,
      },
    });
    return data;
  });
};
