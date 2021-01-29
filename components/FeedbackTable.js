import React from 'react';
import Link from 'next/link';
import Switch from 'react-switch';
import RemoveButton from '@/components/RemoveButton';
import Table, {
  Td,
  Tr,
  Th,
  TdText,
  TdStatus
} from '@/components/UI/Table/Table';

const FeedbackTable = ({ allFeedback }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map((feedback) => (
          <Tr key={feedback.id}>
            <Td TailwindClasses="font-medium">{feedback.name}</Td>
            <Td>
              <TdText>{feedback.text}</TdText>
            </Td>
            <Td>
              <TdText>
                <Link href="/">{'/'}</Link>
              </TdText>
            </Td>
            <Td>
              <Switch
                onChange={() => {}}
                defaultValue={feedback.status === 'active'}
                checked={false}
              />
            </Td>
            <Td>
              <TdText>
                <RemoveButton />
              </TdText>
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
