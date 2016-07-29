import React, { Component, PropTypes } from 'react';

export class DelayChild extends Component {
  constructor() {
    super();
    this.state = { ready: false };
  }

  componentWillMount() {
    if (this.props.delay) {
      this.timeout = setTimeout(() => {
        this.setState({ ready: true });
      }, this.props.delay);
    } else {
      this.setState({ ready: true });
    }
  }
  // if a component did not have a delay prop then it will not trigger
  // componentDidUpdate
  componentDidMount() {
    if (!this.props.delay && this.props.onDone) {
      this.props.onDone();
    }
  }

  componentDidUpdate() {
    if (this.props.onDone) {
      this.props.onDone();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    if (this.state.ready) {
      if (this.props.delay) {
        // fix: Remove unknown prop from the element
        const props = Object.assign({}, this.props);
        delete props.delay;
        delete props.onDone;
        return React.createElement(this.props.children.type, props,
          this.props.children.props.children);
      }
      return this.props.children;
    }
    return null;
  }
}

DelayChild.propTypes = {
  delay: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  children: React.PropTypes.node,
  onDone: React.PropTypes.func,
};

export default DelayChild;
