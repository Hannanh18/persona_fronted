import React from 'react';
import s from './Navigation.css';
import Link from '../Link';

export default function Navigation() {
  return (
    <div className={s.root} role="navigation">
       <Link className={s.link} to="/">
        主页
      </Link>
      <span className={s.spacer}> | </span>
      <Link className={s.link} to="/login">
        登录
      </Link>
      <span className={s.spacer}> | </span>
      <Link className={s.link} to="/about">
        关于我们
      </Link>
    </div>
  );
}
