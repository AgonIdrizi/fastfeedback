import React from 'react';

const IconButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 flex justify-center items-center  bg-transparent  outline-none  text-white  transition ease-in duration-200 text-center text-base font-semibold py-2 px-4 rounded-lg    w-12 h-12"
    >
      {children}
    </button>
  );
};

export default IconButton;
