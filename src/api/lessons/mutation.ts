import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance } from '../axiosInstance';
import { lessons, v1 } from '../endpoints';
import { QUERY_KEYS } from '../query_keys';

type AddLessonData = {
  chapterId: number,
  name: string,
  contentFileId: number,
  interactionFileId: number,
  lessonId: number,
  languageId: number,
};

export const useAddLesson = (lang: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    (data: AddLessonData) =>
      axiosInstance.post(
        v1 + lessons,
        data,
        {
          headers: {
            'Accept-Language': `${lang}`,
          }
        }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.lessons]);
      },
    },
  );
};
