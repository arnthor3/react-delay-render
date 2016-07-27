import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';


import DelayRender, { DelayChild } from '../src/DelayRender';

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
    expect(wrapper.node.props.children.length).to.equal(2);
    expect(wrapper2.node.props.children.length).to.equal(undefined);
  });

});

describe('<DelayChild />', () => {

  let appOne,
  appTwo;
  beforeEach(() => {
    appOne = <DelayRender><h1 delay="0"></h1><h1></h1><h2 delay="350"></h2></DelayRender>;
    appTwo = <DelayRender><h1 delay="250"></h1></DelayRender>;
  });

  it('it calls render after timeout', function(done) {
    sinon.spy(DelayChild.prototype, 'componentWillMount');
    sinon.spy(DelayChild.prototype, 'render');
    const wrapper = mount(appOne);
    setTimeout(() => {
      done();
      expect(DelayChild.prototype.componentWillMount.called).to.equal(true);
      expect(DelayChild.prototype.render.called).to.equal(true);
    },450)
  });

  it('it removes timeout if it unmounts before timeout', function(done) {
    const wrapper = mount(appOne);
    wrapper.unmount();
    done();
  });

});