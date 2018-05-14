import React from 'react';
import classNames from '../utils/classNames';

export default ({ items }) => (
  <ul className={classNames.list}>
    {items.map(({ label, link }) => (
      <li className={classNames.listItem} key={link}>
        <a className={classNames.link} href={link}>{label}</a>
      </li>
    ))}
  </ul>
);
