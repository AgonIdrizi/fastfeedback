import React from 'react';

export const Tr = ({ children }) => <tr>{children}</tr>;

export const Th = ({ children }) => (
  <th
    scope="col"
    class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm text-white uppercase font-normal"
  >
    {children}
  </th>
);

export const Td = ({ children }) => (
  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    {children}
  </td>
);

export const TdStatus = ({ children }) => (
  <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
    <span
      aria-hidden="true"
      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
    ></span>
    <span class="relative">{children}</span>
  </span>
);

export const TdText = ({ children }) => (
  <p class="text-gray-900 whitespace-no-wrap">{children}</p>
);

export const Table = ({ children }) => {
  return (
    <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div class="py-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">{children}</table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
