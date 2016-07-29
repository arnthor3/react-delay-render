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
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDelayRender from 'react-delay-render';

const app = (
    <ReactDelayRender>
        <h1 delay="250"> I am waiting for 250 ms before I get rendered </h1>
        <h1 delay="450"> I am waiting a bit longer</h1>
    </ReactDelayRender>
);

render(app, document.getElementById('app');

```

## Development

The component is developed with webpack dev server and hot module loader.
To run the webpack dev server you just do npm run start.

The server is running on port 8080

``` sh
npm run start
```

There are a couple of tests set up with enzyme and mocha, you can run it once by using the test command.
``` sh
npm run test
```

You can also run the tests in watch mode like

``` sh
npm run watch:test
```

To run the code coverage

``` sh
npm run coverage
```
## Props

### Delay
You can pass in a string or a number. This prop controls the delay time in ms.

This prop works for the children as well as the parent.

``` js
const delay = (
  <ReactDelayRender delay="250">
     <MyComponent delay="350" />
  </ReactDelayRender>
);
```

You can also nest the delays

``` js
const delay = (
  <ReactDelayRender delay="250">
    <h1 delay="250">I am rendered after 0.5s</h1>
    <ReactDelayRender delay="250">
      <h1 delay="500">I am rendered after one second</h1>
    </ReactDelayRender>
  </ReactDelayRender>
);
```

### onFinishRender
A callback that is envoked when the first level of children has finished rendering - Note: this only works for the first level of children, if the component has nested ReactDelayRender then you will need to attach a callback to them as well if needed.

``` js

const parentDone = () => {
  console.log('Hello from parent,
  called after mycomponent renders');
};

const childDone = () => {
  console.log('Hello from child, called when the complexDelay has rendered');
};

const complexDelay = (
  <ReactDelayRender onFinishRender={parentDone}>
    <MyComponent delay="250">...</MyComponent>
    <ReactDelayRender onFinishRender={childDone}>
      <h2 delay="500"></h2>
    </ReactDelayRender>
  </ReactDelayRender>
);