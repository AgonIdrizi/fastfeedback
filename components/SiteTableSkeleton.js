import React from 'react';
import Table, { Td, Tr, Th } from '@/components/UI/Table/Table';

const Skeleton = ({ height, w, marginY }) => (
  <div className={`${height} ${w} ${marginY} bg-gray-300 rounded-sm`}></div>
);

const SkeletonRow = ({ width }) => (
  <Tr>
    <Td>
      <Skeleton height="h-3" w={width} marginY="my-4" />
    </Td>
    <Td>
      <Skeleton height="h-3" w={width} marginY="my-4" />
    </Td>
    <Td>
      <Skeleton height="h-3" w={width} marginY="my-4" />
    </Td>
    <Td>
      <Skeleton height="h-3" w={width} marginY="my-4" />
    </Td>
  </Tr>
);

const SiteTableSkeleton = () => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        <SkeletonRow width="w-20" />
        <SkeletonRow width="w-30" />
        <SkeletonRow width="w-24" />
        <SkeletonRow width="w-14" />
        <SkeletonRow width="w-28" />
      </tbody>
    </Table>
  );
};

export default SiteTableSkeleton;
