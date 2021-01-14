import React from 'react';
import Header from '@/components/Header';
import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';
import Dashboard from '@/components/Dashboard';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';

const dashboard = () => {
  const auth = useAuth();
  if (!auth.user) {
    return (
      <Dashboard>
        <SiteTableSkeleton />
      </Dashboard>
    );
  }
  return (
    <Dashboard>
      <EmptyState />
    </Dashboard>
  );
};

export default dashboard;
