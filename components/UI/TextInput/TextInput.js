import React from 'react';
import { capitalizeFirstLetter } from 'utils/helperFunctions';

const TextInput = ({
  field, // { name, value, onChange, onBlur }
  // form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <div className={`relative ${props.className}`}>
      <label htmlFor={field.name}>{capitalizeFirstLetter(field.name)}</label>
      <input
        type="text"
        {...props}
        {...field}
        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
    </div>
  );
};

export default TextInput;
