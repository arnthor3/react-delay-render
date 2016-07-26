import React, { Component, PropTypes } from 'react';

export class DelayChild extends Component {
  constructor() {
    super();
    this.state = { ready: false };
  }

  componentWillMount() {
    if (this.props.delay === 0) {
      this.setState({ ready: true });
    } else {
      this.timeout = setTimeout(() => {
        this.setState({ ready: true });
      }, this.props.delay);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    if (this.state.ready) {
      if (this.props.children.props.delay) {
        // fix: Remove unknown prop from the element
        const props = Object.assign({}, this.props.children.props);
        delete props.delay;
        return React.createElement(this.props.children.type, props,
          this.props.children.props.children);
      }
      return this.props.children;
    }
    return null;
  }
}

DelayChild.propTypes = {
  delay: React.PropTypes.number,
  children: React.PropTypes.node,
};

export const reactDelayRender = (props) => {
  // make children an array if it's not
  const children = props.children.length ? props.children : [props.children];
  return (
    <span>
      {children.map((d, i) => (
        <DelayChild key={i} delay={parseInt(d.props.delay, 10)}>{d}</DelayChild>
      ))}
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
