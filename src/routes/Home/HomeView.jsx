import React from 'react';
import PropTypes from 'prop-types';
import s from './Home.css';
import Layout from '../../components/Layout/Layout';
import Link from '../../components/Link';

class HomeView extends React.Component {
  render() {
    return (
      <div className={s.root}>
       <Link className={s.link} to="/demographic">
        人口属性
      </Link>
      <span className={s.spacer}> | </span>
      <Link className={s.link} to="/">
      信用属性
      </Link>
      <span className={s.spacer}> | </span>
      <Link className={s.link} to="/consume">
        消费特征
      </Link>
      <span className={s.spacer}> | </span>
      <Link className={s.link} to="/intresets">
        兴趣爱好
      </Link>
    </div>
    );
  }
};

export default HomeView;