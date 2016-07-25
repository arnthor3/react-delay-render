import React from 'react';
import { render } from 'react-dom';
import DelayRender from './DelayRender';

const app = <DelayRender><h1 delay="1250">wer</h1><h2 delay="350">QWER</h2></DelayRender>;

render(app, document.getElementById('app'));
