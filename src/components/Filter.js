import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <lable>
      фільтр
      <input type="text" value={value} onChange={onChange} />
    </lable>
  );
};
export default Filter;
