import React from 'react';

export const BUTTON_CLASS_TYPES = {
  primaryButton:
    ' max-w-16 min-w-2 bg-gray-800 hover:bg-gray-600 focus:ring-gray-500 focus:ring-offset-gray-200 text-bt-white transition ease-in duration-200 text-center text-base font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 '
};

const Button = ({ children, btnType }) => {
  return (
    <button
      type="button"
      className={` px-4 flex justify-center  items-center ${btnType}`}
    >
      {children}
    </button>
  );
};

export default Button;
