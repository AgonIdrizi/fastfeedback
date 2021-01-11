import React from 'react';
import Card from '@/components/UI/Card/Card';
import Button, { BUTTON_CLASS_TYPES } from '@/components/UI/Button/Button';
import Dashboard from './Dashboard';

const EmptyState = () => {
  return (
    <Dashboard>
      <Card>
        <h2 className="text-2xl font-bold mb-0.5">
          You haven't added any sites.
        </h2>
        <p className="mb-4">Welcome, Let's get started</p>
        <Button btnType={BUTTON_CLASS_TYPES.primaryButton}>
          Add Your First Site
        </Button>
      </Card>
    </Dashboard>
  );
};

export default EmptyState;
