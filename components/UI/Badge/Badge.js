import React from 'react';

const Badge = ({ children }) => {
  return (
    <span class="w-full px-4 py-2  text-base rounded-full text-green-600  bg-green-200">
      {children}
    </span>
  );
};

export default Badge;
