import React from 'react';

const CommonFormInput = ({ label, onChange, ...otherProps }) => {
  return (
    <label>
      {label}
      <input
        onChange={(e) => onChange(e.target.value)}
        {...otherProps}
      />
    </label>
  );
};

export default CommonFormInput;
