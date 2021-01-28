import React from 'react';
import axios from 'axios';
import fetcher from '@/utils/fetcher';
import { useQuery } from 'react-query';

const fetchSites = () =>
  axios
    .get('/api/sites', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res);

export default function useSites(token) {
  return useQuery('sites', () => fetcher('/api/sites', token));
}
