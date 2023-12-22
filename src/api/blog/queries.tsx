import { useQuery } from 'react-query';

import { axiosOpen } from '../axiosInstance';
import { blogs } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

import { BackendResponse } from './blogResponseType';

interface GetBlogsParams {
  page: number;
}

export function useGetBlogs({ page }: GetBlogsParams) {
  return useQuery<BackendResponse>(
    [QUERY_KEYS.blogAll, page],
    async () => {
      const { data } = await axiosOpen.get(blogs, {
        params: {
          page: page,
          size: 12,
        },
      });
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
}
