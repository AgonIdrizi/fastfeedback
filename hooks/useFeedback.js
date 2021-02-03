import React from 'react';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import { useQuery, useQueryClient } from 'react-query';

export default function useSites(token) {
  const queryClient = useQueryClient();

  return useQuery(
    'feedback',
    () => fetcher('/api/feedback', token),

    {
      onSuccess: (data) => {
        console.log('Success');
        if (data.error) {
          queryClient.clear();
        }
      },
      onError: () => console.log('Error')
    }
  );
}
