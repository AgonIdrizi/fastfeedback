import React from 'react';
import Dashboard from '@/components/Dashboard';
import Card from './UI/Card/Card';
import Button, { BUTTON_CLASS_TYPES } from './UI/Button/Button';

const FreePlanEmptyState = () => {
  return (
    <Dashboard>
      <Card>
        <h2 className="text-2xl font-bold mb-0.5">
          Get feedback on your site instantly.
        </h2>
        <p className="mb-4">Start today, then grow with us 🌱</p>
        <Button btnType={BUTTON_CLASS_TYPES.primaryButton}>
          Upgrade to Starter
        </Button>
      </Card>
    </Dashboard>
  );
};

export default FreePlanEmptyState;
