import React from "react";

const Input = ({ id, value, placeholder, setValue, ...proops }) => {
  return (
    <>
      <input
        value={value}
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...proops}
      />
    </>
  );
};

export default Input;
