import React from 'react';
import Header from '@/components/Header';
import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';

const dashboard = () => {
  const auth = useAuth();
  if (!auth.user) {
    return 'Loading...';
  }
  return <EmptyState />;
};

export default dashboard;
