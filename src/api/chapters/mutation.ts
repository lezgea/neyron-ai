import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance } from '../axiosInstance';
import { chapters, v1 } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

type AddChapterData = {
  courseId: number;
  name: string;
  description: string;
  chapterId: number;
  languageId: number;
};

export const useAddChapter = (lang: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    (data: AddChapterData) =>
      axiosInstance.post(
        v1 + chapters,
        data,
        {
          headers: {
            'Accept-Language': `${lang}`,
          }
        }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.chapters]);
      },
    },
  );
};
