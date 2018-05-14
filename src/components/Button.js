import React from 'react';
import classNames from '../utils/classNames';

export default ({ children, onClick }) => (
  <button className={classNames.button} onClick={onClick}>
    {children}
  </button>
);
