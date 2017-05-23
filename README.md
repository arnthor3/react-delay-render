[![Coverage Status](https://coveralls.io/repos/github/arnthor3/react-delay-render/badge.svg?branch=master)](https://coveralls.io/github/arnthor3/react-delay-render?branch=master)
[![Build Status](https://travis-ci.org/arnthor3/react-delay-render.svg?branch=master)](https://travis-ci.org/arnthor3/react-delay-render)
# React-Delay-Render
A small component that delays the rendering of components.

## Usage
Download the package from npm with

``` sh
npm i -S react-delay-render
```

``` js
import React from 'react';
import ReactDelayRender from 'react-delay-render';

const SmallRow = () => (
  <div className="row">
    ...
  </div>
);

export default ReactDelayRender({ delay: 500 })(SmallRow);

```

## Argument Object

The Higher order component takes in two arguments, delay and a callback onRender

### Delay

You can use the delay on the delayed component and the children as well.

``` js
import Delay from 'react-delay-render';

const Delayed = () => (
  <MyDelayedComponent>
    <MyOtherDelayedComponentChild />
  </MyDelayedComponent>
);

export default Delay({ delay: 200 })(Delayed);
```

### onRender

A callback that is triggered when the rendering has started

``` js
import Delay from 'react-delay-render';

const render = () => {
  console.log('I am rendering');
};

const ExampleTwo = () => (
  <DelayedComponent>
    <MyComponent />
  </DelayedComponent>
);

export default Delay({delay: 500, onRender: render})(ExampleTwo)

