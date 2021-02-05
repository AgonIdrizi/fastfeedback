import useSites from '@/hooks/useSites';
import fetcher from '@/utils/fetcher';
import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';
import DashboardShell from '@/components/DashboardShell';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTable from '@/components/SiteTable';
import SiteTableHeader from '@/components/SiteTableHeader';

const Dashboard = () => {
  const { user } = useAuth();
  const token = user ? user.ya : null;

  const { data } = useSites(token);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }
  return (
    <DashboardShell>
      <SiteTableHeader />
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
