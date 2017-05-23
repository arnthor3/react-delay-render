import React, { Component } from 'react';
import Delay from 'react-delay-render';
import { onDone } from './some-action.js';

const Row = () => (
  <div className="row">
    <h1>Hello</h1>
  </div>
);

const DelayedChild = Delay({ delay: 500 })(Row);

class Test extends Component {

  render() {
    return (
      <div className="container">
        <DelayedChild />
      </div>
    );
  }
};

export default Delay({ delay: 500, onDone })(Test);
