import React from 'react';

export const InputField = ({ value, onChange }) => {
  return <input
    type='number'
    className='rounded-md shadow-md p-4'
    value={value}
    onChange={onChange}
  />;
};