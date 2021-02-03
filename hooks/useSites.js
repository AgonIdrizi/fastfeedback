import React from 'react';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import { useQuery, useQueryClient } from 'react-query';

export default function useSites(token) {
  const queryClient = useQueryClient();
  return useQuery(
    'sites',
    () => fetcher('/api/sites', token),

    {
      onSuccess: (data) => {
        console.log('Success useSites', data);
        //queryClient.setQueryData('sites', data);
      },
      onError: () => console.log('Error')
    }
  );
}
