import React from 'react';
import { render } from 'react-dom';
import DelayRender from './DelayRender';

const app = (
  <span>
    <DelayRender delay="250" onFinishRender={() => { console.log('Single parent'); }}>
      <h1 delay="1250">I am rendered after 1.25 s</h1>
      <h2 delay="350">I am rendered after 0.35 s</h2>
    </DelayRender>
    <DelayRender delay="2000" onFinishRender={() => { console.log('Parent'); }}>
      <p delay="500"> I am rendered after 2.5 s</p>
      <DelayRender delay="250" onFinishRender={() => { console.log('Child'); }}>
        <p delay="1250">Child</p>
        <p delay="100">Children</p>
      </DelayRender>
    </DelayRender>
  </span>
  );

const app2 = (
  <DelayRender delay="500" onFinishRender={() => { console.log('done'); }}>
    <h2 delay="250">Hello</h2>
    <h1>Hello</h1>
  </DelayRender>
);

render(app, document.getElementById('app'));
