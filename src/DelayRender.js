import React, { Component, PropTypes } from 'react';
import DelayChild from './DelayChild';

const reactDelayRender = (props) => {
  // make children an array if it's not
  const children = props.children.length ? props.children : [props.children];
  return (
    <span>
      {children.map((d, i) => (
        <DelayChild key={i} delay={parseInt(d.props.delay, 10)}>{d}</DelayChild>
      )
      )}
    </span>
  );
};

reactDelayRender.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default reactDelayRender;
