import React from 'react';
import useSWR from 'swr';
import useSites from '@/hooks/useSites';
import Header from '@/components/Header';
import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';
import Dashboard from '@/components/Dashboard';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTable from '@/components/SiteTable';

const Dashboard = () => {
  const auth = useAuth();
  const { data, error } = useSites();

  if (!data) {
    return (
      <Dashboard>
        <SiteTableSkeleton />
      </Dashboard>
    );
  }
  return (
    <Dashboard>
      {data.data.sites ? <SiteTable sites={data.data.sites} /> : <EmptyState />}
    </Dashboard>
  );
};

export default Dashboard;
