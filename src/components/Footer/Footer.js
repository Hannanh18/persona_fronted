import React from 'react';
import s from './Footer.css';

export default function Footer() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <span className={s.text}>© ThoughtWorks</span>
        <span className={s.spacer}>·</span>
      </div>
    </div>
  );
}
