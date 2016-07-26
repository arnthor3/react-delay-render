'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _DelayRender = require('./DelayRender');

var _DelayRender2 = _interopRequireDefault(_DelayRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _react2.default.createElement(
  _DelayRender2.default,
  null,
  _react2.default.createElement(
    'h1',
    { delay: '1250' },
    'wer'
  ),
  _react2.default.createElement(
    'h2',
    { delay: '350' },
    'QWER'
  )
);

(0, _reactDom.render)(app, document.getElementById('app'));