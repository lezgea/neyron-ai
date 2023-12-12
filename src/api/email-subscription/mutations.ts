import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { axiosOpen } from '../axiosInstance';

export const useEmailSubscription = (): UseMutationResult<void, unknown, string, unknown> => {
  return useMutation((email: string) => axiosOpen.post('/email-subscriptions', { email }));
};
