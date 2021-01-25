import React from 'react';
import Card from '@/components/UI/Card/Card';
import Button, { BUTTON_CLASS_TYPES } from '@/components/UI/Button/Button';

import AddSiteModal from '@/components/AddSiteModal';
import Table, { Td, Tr, Th, TdStatus, TdText } from './UI/Table/Table';

const EmptyState = () => {
  return (
    <>
      <Card>
        <h2 className="text-2xl font-bold mb-0.5">
          You haven't added any sites.
        </h2>
        <p className="mb-4">Welcome, Let's get started</p>
        <AddSiteModal>Add Your First Site</AddSiteModal>
      </Card>
    </>
  );
};

export default EmptyState;
