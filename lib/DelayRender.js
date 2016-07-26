'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DelayChild = function (_Component) {
  _inherits(DelayChild, _Component);

  function DelayChild() {
    _classCallCheck(this, DelayChild);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DelayChild).call(this));

    _this.state = { ready: false };
    return _this;
  }

  _createClass(DelayChild, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (this.props.delay === 0) {
        this.setState({ ready: true });
      } else {
        setTimeout(function () {
          _this2.setState({ ready: true });
        }, this.props.delay);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.ready) {
        if (this.props.children.props.delay) {
          // fix: Remove unknown prop from the element
          var props = Object.assign({}, this.props.children.props);
          delete props.delay;
          return _react2.default.createElement(this.props.children.type, props, this.props.children.props.children);
        }
        return this.props.children;
      }
      return null;
    }
  }]);

  return DelayChild;
}(_react.Component);

DelayChild.propTypes = {
  delay: _react2.default.PropTypes.number,
  children: _react2.default.PropTypes.node
};

var reactDelayRender = function reactDelayRender(props) {
  // make children an array if it's not
  var children = props.children.length ? props.children : [props.children];
  return _react2.default.createElement(
    'span',
    null,
    children.map(function (d, i) {
      return _react2.default.createElement(
        DelayChild,
        { key: i, delay: parseInt(d.props.delay, 10) },
        d
      );
    })
  );
};

reactDelayRender.propTypes = {
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node])
};

exports.default = reactDelayRender;