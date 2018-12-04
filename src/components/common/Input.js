import React from 'react';

const Input = ({
    type,
    onChange,
    id,
    value,
    classOverrides,
    inputWidth,
    inputHeight,
    name,
    min,
    max
}) => {
  const pl = type !== 'range' ? '10px' : null;
  return (
    <input name={name}
      type={type}
      min={min}
      max={max}
      onChange={onChange}
      id={id}
      value={value}
      className={classOverrides}
      style={{ width: inputWidth, height: inputHeight, border: '1px solid #d9d4d4', borderRadius: '3px', paddingLeft: pl }} />
  );
};

export default Input;
