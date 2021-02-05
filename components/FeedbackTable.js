import React from 'react';
import Link from 'next/link';
import Switch from 'react-switch';
import Badge, { badgeTypes } from '@/components/UI/Badge/Badge';
import RemoveButton from '@/components/RemoveButton';
import Table, {
  Td,
  Tr,
  Th,
  TdText,
  TdStatus
} from '@/components/UI/Table/Table';

const FeedbackTable = ({ allFeedback }) => {
  function selectBadgeType(status) {
    status === 'active'
      ? badgeTypes.success
      : status === 'pending'
      ? badgeTypes.pending
      : badgeTypes.refused;
  }
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
            <Td TailwindClasses="font-medium">{feedback.author}</Td>
            <Td>
              <TdText>{feedback.text}</TdText>
            </Td>
            <Td>
              <TdText>
                <Link href="/">{'/'}</Link>
              </TdText>
            </Td>
            <Td>
              <Badge
                type={
                  feedback.status === 'active'
                    ? badgeTypes.success
                    : feedback.status == 'pending'
                    ? badgeTypes.pending
                    : badgeTypes.refused
                }
              >
                {feedback.status}
              </Badge>
            </Td>
            <Td>
              <RemoveButton feedbackId={feedback.id} />
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
