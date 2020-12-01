import React from 'react';
import Markdown from "markdown-to-jsx";
import s from './About.css';
import about from './about.md';

class HomeView extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Markdown>{about}</Markdown>
        </div>
      </div>
    );
  }
};

export default HomeView;