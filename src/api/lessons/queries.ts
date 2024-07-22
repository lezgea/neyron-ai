import { useQuery } from 'react-query';

import { axiosInstance } from '../axiosInstance';
import { lessons, v1 } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';


export const useGetLessons = (lang: string) => {
    return useQuery([QUERY_KEYS.lessons], async () => {
        const { data } = await axiosInstance.get(v1 + lessons, {
            headers: {
                'Accept-Language': `${lang}`,
            },
        });
        return data;
    });
};
