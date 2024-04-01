import React, { useRef } from 'react';

const UseRefComponent = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
    <div className="container">
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
    </>
  );
};

export default UseRefComponent;
