'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _DelayRender = require('./DelayRender');

var _DelayRender2 = _interopRequireDefault(_DelayRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _react2.default.createElement(
  'span',
  null,
  _react2.default.createElement(
    _DelayRender2.default,
    { delay: '250', onFinishRender: function onFinishRender() {
        console.log('Single parent');
      } },
    _react2.default.createElement(
      'h1',
      { delay: '1250' },
      'I am rendered after 1.25 s'
    ),
    _react2.default.createElement(
      'h2',
      { delay: '350' },
      'I am rendered after 0.35 s'
    )
  ),
  _react2.default.createElement(
    _DelayRender2.default,
    { delay: '2000', onFinishRender: function onFinishRender() {
        console.log('Parent');
      } },
    _react2.default.createElement(
      'p',
      { delay: '500' },
      ' I am rendered after 2.5 s'
    ),
    _react2.default.createElement(
      _DelayRender2.default,
      { delay: '250', onFinishRender: function onFinishRender() {
          console.log('Child');
        } },
      _react2.default.createElement(
        'p',
        { delay: '1250' },
        'Child'
      ),
      _react2.default.createElement(
        'p',
        { delay: '100' },
        'Children'
      )
    )
  )
);

var app2 = _react2.default.createElement(
  _DelayRender2.default,
  { delay: '500', onFinishRender: function onFinishRender() {
      console.log('done');
    } },
  _react2.default.createElement(
    'h2',
    { delay: '250' },
    'Hello'
  ),
  _react2.default.createElement(
    'h1',
    null,
    'Hello'
  )
);

(0, _reactDom.render)(app, document.getElementById('app'));