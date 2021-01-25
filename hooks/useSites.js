import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSites = () => axios.get('/api/sites').then((res) => res);

export default function useSites() {
  return useQuery('sites', () => fetchSites());
}
