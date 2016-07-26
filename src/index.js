import React from 'react';
import { render } from 'react-dom';
import DelayRender from './DelayRender';

const app = (
  <DelayRender>
    <h1 delay="1250">I am rendered after 1.25 s</h1>
    <h2 delay="350">I am rendered after 0.35 s</h2>
  </DelayRender>
  );

render(app, document.getElementById('app'));
