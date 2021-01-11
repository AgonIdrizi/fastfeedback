import React from 'react';

export const BUTTON_CLASS_TYPES = {
  primaryButton:
    ' max-w-16 min-w-2 bg-gray-800 hover:bg-gray-600 focus:ring-gray-500 focus:ring-offset-gray-200 text-bt-white transition ease-in duration-200 text-center text-base font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ',
  secondaryButton:
    'w-22 mt-4 rounded-md text-base font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 py-2'
};

const Button = ({ children, btnType, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={` px-4 flex justify-center  items-center ${btnType}`}
    >
      {children}
    </button>
  );
};

export default Button;
