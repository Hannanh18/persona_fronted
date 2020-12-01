import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function handleClick(props, event) {
  if (props.onClick) {
    props.onClick(event);
  }

  if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
    return;
  }

  if (event.defaultPrevented === true) {
    return;
  }

  event.preventDefault();
  browserHistory.push(props.to);
}

export default function Link(props) {
  const { to, children, ...attrs } = props;

  return (
    <a href={to} {...attrs} onClick={e => handleClick(props, e)}>
      {children}
    </a>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Link.defaultProps = {
  onClick: null,
};
