import { useQuery } from 'react-query';

import { axiosInstance } from '../axiosInstance';
import { chapters, courses, v1 } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';


export const useGetChapters = (chapterId) => {
    return useQuery([QUERY_KEYS.chapters], async () => {
        const { data } = await axiosInstance.get(v1 + chapters + courses + '/' + 1);
        return data;
    });
};
