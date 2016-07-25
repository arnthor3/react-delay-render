import React, { Component, PropTypes } from 'react';

class DelayChild extends Component {
  constructor() {
    super();
    this.state = { ready: false };
  }

  componentWillMount() {
    if (this.props.delay === 0) {
      this.setState({ ready: true });
    } else {
      setTimeout(() => {
        this.setState({ ready: true });
      }, this.props.delay);
    }
  }

  render() {
    if (this.state.ready) {
      if (this.props.children.props.delay) {
        const props = Object.assign({}, this.props.children.props);
        delete props.delay;
        this.props.children.props = props;
        const el = React.cloneElement(this.props.children, props);
        console.log(el);
        return el;
      }
      return this.props.children;
    }
    return null;
  }
}

export default DelayChild;

DelayChild.propTypes = {
  delay: React.PropTypes.number,
  children: React.PropTypes.node,
};
