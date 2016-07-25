import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import DelayRender from '../src/DelayRender';

describe('<DelayRender />', () => {
  let appOne,
  appTwo;
  beforeEach(() => {
    appOne = <DelayRender><h1 delay="250"></h1><h2 delay="350"></h2></DelayRender>;
    appTwo = <DelayRender><h1 delay="250"></h1></DelayRender>;
  });

  it('can handle one child or many children', () => {
    const wrapper = mount(appOne);
    const wrapper2 = mount(appTwo);
  })

});