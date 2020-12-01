import React from 'react';
import PropTypes from 'prop-types';

import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
