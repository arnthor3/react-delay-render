import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';


import DelayRender from '../src/DelayRender';

describe('<DelayRender />', () => {
  let appOne,
  appTwo, appThree;
  beforeEach(() => {
    appOne = <DelayRender><h1 delay="250"></h1><h2 delay="350"></h2></DelayRender>;
    appTwo = <DelayRender><h1 delay="250"></h1></DelayRender>;
    appThree = <DelayRender delay="500"><h1 delay="250"></h1><h2 delay="350"></h2></DelayRender>;
  });

  it('can handle one child or many children', () => {
    const wrapper = mount(appOne);
    const wrapper2 = mount(appTwo);

    expect(wrapper.node.props.children.length).to.equal(2);
    expect(wrapper2.node.props.children.length).to.equal(undefined);

    wrapper2.unmount();
    wrapper.unmount();

  });

  it('can add a delay to parent also', function(done) {
    sinon.spy(DelayRender.prototype, 'componentWillMount');
    sinon.spy(DelayRender.prototype, 'render');

    const wrapper = mount(appThree);
    expect(wrapper.node.state.ready).to.equal(false);
    setTimeout(() => {
      expect(wrapper.node.state.ready).to.equal(true);
      done();
    }, 600);

  });

  it('can callback when first level children has rendered', function(done) {

    const spy = sinon.spy();
    const wrapper = mount(
      <DelayRender onFinishRender={ spy }>
        <h1 delay="25"></h1>
        <h1 delay="125"></h1>
      </DelayRender>
    );

    setTimeout(() => {
      expect(spy.called).to.equal(true);
      done();
    }, 260);

  });

  it('can callback when second level children has rendered', function(done) {

    const spy = sinon.spy();
    const spy2 = sinon.spy();
    const wrapper = mount(
      <DelayRender onFinishRender={ spy }>
        <h1 delay="25"></h1>
        <h1 delay="125"></h1>
        <DelayRender onFinishRender={ spy2 }>
          <h1 delay="250"></h1>
        </DelayRender>
      </DelayRender>
    );

    setTimeout(() => {
      expect(spy.called).to.equal(true);
      expect(spy2.called).to.equal(true);
      done();
    }, 560);

  });

});

/*
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

*/