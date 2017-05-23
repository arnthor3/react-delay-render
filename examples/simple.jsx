import React, { Component } from 'react';
import Delay from 'react-delay-render';

const Simple = () => (
  <div className="row">
    ....
  </div>
);

export default Delay({ delay: 500 })(Simple);
