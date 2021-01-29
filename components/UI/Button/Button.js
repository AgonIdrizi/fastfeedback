import React from 'react';

export const BUTTON_CLASS_TYPES = {
  primaryButton:
    ' max-w-16 min-w-2 bg-gray-800 hover:bg-gray-600 focus:ring-gray-500 focus:ring-offset-gray-200 text-bt-white  text-center text-base font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ',
  secondaryButton:
    'w-22 mt-4 rounded text-base font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 py-2',
  successButton:
    'w-22 bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm mt-4  py-2 rounded shadow hover:shadow-lg  hover:bg-green-600 outline-none focus:outline-none ',
  dangerButton:
    'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 focus:ring-offset-red-200 font-bold uppercase text-sm mt-4  py-2 rounded shadow'
};

const Button = ({
  children,
  btnClassType,
  onClick,
  disabled = false,
  btnType = 'button'
}) => {
  return (
    <button
      type={btnType}
      onClick={onClick}
      className={` px-6 flex justify-center  items-center transition ease-in duration-200 ${btnClassType}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
