import React from 'react';
import DashboardShell from '@/components/DashboardShell';
import Card from './UI/Card/Card';
import Button, { BUTTON_CLASS_TYPES } from './UI/Button/Button';

const FreePlanEmptyState = () => {
  return (
    <DashboardShell>
      <Card>
        <h2 className="text-2xl font-bold mb-0.5">
          Get feedback on your site instantly.
        </h2>
        <p className="mb-4">Start today, then grow with us 🌱</p>
        <Button btnClassType={BUTTON_CLASS_TYPES.primaryButton}>
          Upgrade to Starter
        </Button>
      </Card>
    </DashboardShell>
  );
};

export default FreePlanEmptyState;
