import React from 'react';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import { useQuery } from 'react-query';

export default function useSites(token) {
  return useQuery(
    token && 'sites',
    () => fetcher('/api/sites', token),

    {
      onSuccess: () => console.log('Success'),
      onError: () => console.log('Error')
    }
  );
}
