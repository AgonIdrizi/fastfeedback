import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-white flex flex-col items-center justify-center rounded-md h-60 p-16 w-full">
      {children}
    </div>
  );
};

export default Card;
