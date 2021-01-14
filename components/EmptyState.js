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
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>Agon id</Td>
            <Td>
              <TdText>Admin</TdText>
            </Td>
            <Td>
              <TdText>12/09/2020</TdText>
            </Td>
            <Td>
              <TdStatus>active</TdStatus>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <TdText>Marcus coco</TdText>
            </Td>
            <Td>
              <TdText>Designer</TdText>
            </Td>
            <Td>
              <TdText>01/10/2012</TdText>
            </Td>
            <Td>
              <TdStatus>active</TdStatus>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <TdText>Ecric marc</TdText>
            </Td>
            <Td>
              <TdText>Developer</TdText>
            </Td>
            <Td>
              <TdText>02/10/2018</TdText>
            </Td>
            <Td>
              <TdStatus>active</TdStatus>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <TdText>Julien Huger</TdText>
            </Td>
            <Td>
              <TdText>User</TdText>
            </Td>
            <Td>
              <TdText>23/09/2010</TdText>
            </Td>
            <Td>
              <TdStatus>active</TdStatus>
            </Td>
          </Tr>
        </tbody>
      </Table>
    </>
  );
};

export default EmptyState;
