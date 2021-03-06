import React from 'react';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import Table, {
  Td,
  Tr,
  Th,
  TdText,
  TdStatus
} from '@/components/UI/Table/Table';

const SiteTable = ({ sites }) => {
  return (
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
        {sites.map((site) => (
          <Tr key={site.id}>
            <Td TailwindClasses="font-medium">{site.site}</Td>
            <Td>
              <TdText>{site.url}</TdText>
            </Td>
            <Td>
              <TdText>
                <Link href="/p/[siteId]" as={`/p/${site.id}`}>
                  <span className="text-blue-400 font-semibold cursor-pointer hover:underline">
                    View Feedback
                  </span>
                </Link>
              </TdText>
            </Td>
            <Td>
              <TdText>{format(parseISO(site.createdAt), 'PPpp')}</TdText>
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SiteTable;
