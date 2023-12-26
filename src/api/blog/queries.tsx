import { useQuery } from 'react-query';

import { IDataType } from 'src/types';

import { axiosOpen } from '../axiosInstance';
import { blogs } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

import { IBackendResponse } from './blogResponseType';

interface Props {
  page: number;
}

export function useGetBlogs({ page }: Props) {
  return useQuery<IBackendResponse<IDataType>>(
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

export function useGetBlogDetail({ id }: { id: number }) {
  return useQuery<IBackendResponse<IDataType>>([QUERY_KEYS.blogDetail], async () => {
    const { data } = await axiosOpen.get(blogs + `/${id}`, {
      params: {
        id,
      },
    });
    return data;
  });
}
