import React, { ChangeEvent } from 'react';

const Checkbox:React.FC<{ select:(event:ChangeEvent<HTMLInputElement>)
=> void, checked:boolean }> = ({ select, checked }) => (
  <input type="checkbox" checked={checked} onChange={select} className="content__transfer-filter-checkbox" />
);

export default Checkbox;
