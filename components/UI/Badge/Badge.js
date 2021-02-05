import React from 'react';

export const badgeTypes = {
  success: 'text-green-600  bg-green-200',
  pending: 'text-yellow-600  bg-yellow-200',
  refused: 'text-red-600  bg-red-200'
};

const Badge = ({ type, children }) => {
  return (
    <span class={`w-full px-2 py-2  text-xs rounded-3xl ${type}`}>
      {children}
    </span>
  );
};

export default Badge;
