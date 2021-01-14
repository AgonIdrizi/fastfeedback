import React from 'react';
import useSWR from 'swr';
import Header from '@/components/Header';
import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';
import Dashboard from '@/components/Dashboard';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import fetcher from 'utils/fetcher';
import SiteTable from '@/components/SiteTable';

const dashboard = () => {
  const auth = useAuth();
  const { data, error } = useSWR('/api/sites', fetcher);

  console.log(data);

  if (!data) {
    return (
      <Dashboard>
        <SiteTableSkeleton />
      </Dashboard>
    );
  }
  return (
    <Dashboard>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </Dashboard>
  );
};

export default dashboard;
