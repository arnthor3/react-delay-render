import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import sinon from 'sinon';

import DelayRender from '../src/';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('DelayRender', () => {
  it('should render one component', () => {
    const MyElement = () => (
      <h1 style={{ color: 'red' }}>TEST</h1>
    );
    const Test = DelayRender()(MyElement);
    const dom = mount(<Test />);
    expect(dom.find('h1').length).toBe(1);
  });
  it('should delay one component', (done) => {
    const Element = () => <div><span>TEST</span></div>
    const Test = DelayRender({ delay: 50 })(Element);
    const dom = mount(<Test />);
    expect(dom.html()).toBe(null);
    const ren = sinon.spy(Test.prototype, 'render');
    setTimeout(() => {
      expect(dom.html()).toBe('<div><span>TEST</span></div>') 
      done();
    }, 700);
  });
  it('should callback when rendering', (done) => {
    const MyElement = () => (
      <h1 style={{ color: 'red' }}>TEST</h1>
    );
    const render = sinon.spy();
    const Test = DelayRender({ delay: 500, onRender: render })(MyElement);
    const dom = mount(<Test />);
    setTimeout(() => {
      expect(render.called).toBe(true);
      done();
    }, 600);
  });
  it('should clear timeout on unmount', (done) => {
    const MyElement = () => (
      <h1 style={{ color: 'red' }}>TEST</h1>
    );

    const Test = DelayRender({ delay: 500 })(MyElement);
    const render = sinon.spy(Test.prototype, 'componentWillUnmount');
    const dom = mount(<Test />);
    dom.unmount();
    setTimeout(() => {
      expect(render.called).toBe(true);
      done();
    }, 200);
  });


});
