import { useQuery } from 'react-query';

import { axiosInstance } from '../axiosInstance';
import { courses, languages, v1 } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';


export const useGetCourses = () => {
    return useQuery([QUERY_KEYS.courses], async () => {
        const { data } = await axiosInstance.get(v1 + courses + languages);
        return data;
    });
};
