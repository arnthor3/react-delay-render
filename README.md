[![Coverage Status](https://coveralls.io/repos/arnthor3/react-delay-render/badge.svg?branch=master)](https://coveralls.io/r/arnthor3/react-delay-render?branch=master)
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

Questions or comments arnthor3@gmail.com