import React from 'react';
import useSWR from 'swr';
import useSites from '@/hooks/useSites';
import Header from '@/components/Header';
import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';
import DashboardShell from '@/components/DashboardShell';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTable from '@/components/SiteTable';

const Dashboard = () => {
  const auth = useAuth();
  const { data, error } = useSites();

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }
  return (
    <DashboardShell>
      {data.data.sites ? <SiteTable sites={data.data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
