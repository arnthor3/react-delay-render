'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DelayChild = exports.ReactDelayRender = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DelayChild = require('./DelayChild');

var _DelayChild2 = _interopRequireDefault(_DelayChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDelayRender = exports.ReactDelayRender = function (_Component) {
  _inherits(ReactDelayRender, _Component);

  function ReactDelayRender() {
    _classCallCheck(this, ReactDelayRender);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactDelayRender).call(this));

    _this.state = { ready: false };
    _this.done = 0;
    _this.onDoneFn = _this.onDone.bind(_this);
    return _this;
  }

  _createClass(ReactDelayRender, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (this.props.delay) {
        this.timeout = setTimeout(function () {
          _this2.setState({ ready: true });
        }, this.props.delay);
      } else {
        this.setState({ ready: true });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'onDone',
    value: function onDone() {
      this.done += 1;
      var childLen = this.props.children.length || 1;
      if (this.done === childLen) {
        if (this.props.onFinishRender) {
          this.props.onFinishRender();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.state.ready) {
        var children = this.props.children.length ? this.props.children : [this.props.children];
        return _react2.default.createElement(
          'span',
          null,
          children.map(function (d, i) {
            if (d.type.displayName === 'ReactDelayRender') {
              var props = Object.assign({}, d.props, { key: i });
              return _react2.default.createElement(d.type, props, d.props.children);
            }
            return _react2.default.createElement(
              _DelayChild2.default,
              { key: i, delay: d.props.delay, onDone: _this3.onDoneFn },
              d
            );
          })
        );
      }
      return _react2.default.createElement('span', null);
    }
  }]);

  return ReactDelayRender;
}(_react.Component);

ReactDelayRender.propTypes = {
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node]).isRequired,
  delay: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  onFinishRender: _react2.default.PropTypes.func
};

exports.DelayChild = _DelayChild2.default;
exports.default = ReactDelayRender;