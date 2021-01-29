import useFeedback from '@/hooks/useFeedback';
import fetcher from '@/utils/fetcher';
import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';
import DashboardShell from '@/components/DashboardShell';
import FeedbackTable from '@/components/FeedbackTable';

import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';
const MyFeedback = () => {
  const { user } = useAuth();
  const token = user ? user.ya : null;

  const { data, error } = useFeedback(token);

  if (!data) {
    return (
      <DashboardShell>
        <FeedbackTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }
  return (
    <DashboardShell>
      <FeedbackTableHeader />
      {data.feedback ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
};

export default MyFeedback;
