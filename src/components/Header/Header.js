import React from 'react';
import ReactDOM from 'react-dom';
import s from './Header.css';
import Navigation from '../Navigation';

export default function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>用户画像</h1>
          <p className={s.bannerDesc}>探索用户的价值</p>
            <Navigation />
          <p></p>
        </div>
      </div>
    </div>
  );
}

