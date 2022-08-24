import React from 'react';

const InputGeneric = ({placeholder, inputRef, onChange, onSubmit}) => {
  return (
    <input ref={inputRef} type='text' placeholder={placeholder} onChange={onChange} onSubmit={(e) => onSubmit(e)}></input>
  );
};

export default InputGeneric;