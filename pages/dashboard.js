import React from 'react';
import useSWR from 'swr';

import useSites from '@/hooks/useSites';
import fetcher from '@/utils/fetcher';
import Header from '@/components/Header';
import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';
import DashboardShell from '@/components/DashboardShell';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTable from '@/components/SiteTable';

const Dashboard = () => {
  const { user } = useAuth();
  const token = user ? user.ya : null;
  console.log('user dashboard', user, token);
  const { data, error } = useSites(token);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }
  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
